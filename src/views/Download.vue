<template>
    <div>
        <div v-if="data">
            <div id="displayName">{{data.displayName}}</div>
            <div id="platform">{{data.platform}}</div>
            <div id="environment">{{data.environment}}</div>
            <div id="version">{{data.version}}({{data.buildVersion}})</div>
            <el-link v-if="this.data" :href="'itms-services://?action=download-manifest&url=https://api.minglechang.com/app/plist/' + this.data.id">
            <div id="button">下载</div>
            </el-link>
        </div>
        
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
#displayName {
    margin: 0.5rem;
    color: #333333;
    font-size: 2.5rem;
}
#platform {
    margin: 0.5rem;
    color: #333333;
    font-size: 2.0rem;
}
#environment {
    margin: 0.5rem;
    color: #333333;
    font-size: 2.0rem;
}
#version {
    margin: 0.5rem;
    color: #333333;
    font-size: 1.5rem;
}
#button {
    margin-top: 1.0rem;
    width: 10.0rem;
    height: 3.0rem;
    border-radius: 1.5rem;
    line-height: 3.0rem;
    background-color: #006938;
    color: white;
    text-align: center;
}
</style>