<template>
    <div>
        <h1>download</h1>
        <el-link v-if="this.data" :href="'itms-services://?action=download-manifest&url=https://api.minglechang.com/app/plist/' + this.data.id">下载</el-link>
    </div>
</template>

<script>
import {GetAppInfo} from '@/api/app'
export default {
    name: 'download',
    data() {
        return {
            name: "test",
            data: null
        }
    },
    created() {
        this.getAppInfo()
    },
    methods: {
        async getAppInfo() {
            this.$loading({})
            let appId = this.$route.params['id']
            try {
                let result =await GetAppInfo(appId)
                this.data = result;
            }catch(error) {
                this.$message({
                    message: error.message,
                    type: "error"
                })
            }
            this.$loading().close()
        }
    }
}
</script>

<style scoped>

</style>