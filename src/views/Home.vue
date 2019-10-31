<template>
    
  <div id="containter">
      <div id="content">
          <el-breadcrumb separator="/">
          <el-breadcrumb-item>
              <el-button type="text" @click="homeClick">首页</el-button>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="packageId">
              <el-button type="text" @click="packageIdClick">{{packageId}}</el-button>
            </el-breadcrumb-item>
          <el-breadcrumb-item v-if="platform">
              <el-button type="text" @click="packageIdClick">{{platform}}</el-button>
              </el-breadcrumb-item>
          <el-breadcrumb-item v-if="environment">
              <el-button type="text" @click="environmentClick">{{environment}}</el-button>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="version">
              <el-button type="text" @click="versionClick">{{version}}</el-button>
          </el-breadcrumb-item>
          </el-breadcrumb>
          <ul>
              <li v-for="app in packageIds" :key="app" @click="selectPackageId(app.packageId)">
                <a href="javascript:void(0);">

                <div>
                  {{app.displayName}}
                </div>
                <div>
                  {{app.packageId}}
                </div>
                </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
    import {GetPackageIds} from '@/api/app'
export default {
    name: 'home',
    data() {
        return {
            packageId:null,
            packageIds:null,
            platform:null,
            environment:null,
            version:null
        }
    },
    created() {
        this.getPackageIds()
    },
    methods: {
        homeClick() {
            this.$message.error("Home")
        },
        packageIdClick() {
            this.$message.error("PackageId")
        },
        platformClick() {
            this.$message.error("platform")
        },
        environmentClick() {
            this.$message.error("environment")
        },
        versionClick() {
            this.$message.error("version")
        },
        selectPackageId(packageId) {
            this.$message.error(packageId)
        },
        async getPackageIds() {
            this.$loading({})
            try {
                let result =await GetPackageIds()
                this.packageIds = result;
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
#containter {
  width: 100%;
  height: 100%;
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
#content {
  padding: 1.5rem;
  max-width: 80%;
  width: 30rem;
}
#content .el-table {
    width: 100%;
}
#content ul {
    padding: 0px;
    margin: 0px;
    list-style-type:none;
    text-align: left;
}
li a {
    display:block;
    text-decoration:none
}
li a:hover {
    background-color: gray;
}
</style>