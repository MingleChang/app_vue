<template>
  <div id="content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <el-button type="text" @click="homeClick">首页</el-button>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="packageId">
        <el-button type="text" @click="packageIdClick">{{packageId.displayName}}</el-button>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="platform">
        <el-button type="text" @click="packageIdClick">{{platform.platform}}</el-button>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="environment">
        <el-button type="text" @click="environmentClick">{{environment.environment}}</el-button>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="version">
        <el-button type="text" @click="versionClick">{{version.version}}</el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <HomeAppList v-if="apps" :apps="apps" @selectedItem="selectApp"></HomeAppList>
    <HomeVersionList v-else-if="versions" :apps="versions" @selectedItem="selectVersion"></HomeVersionList>
    <HomeEnvironmentList
      v-else-if="environments"
      :apps="environments"
      @selectedItem="selectEnvironment"
    ></HomeEnvironmentList>
    <HomePlatformList v-else-if="platforms" :apps="platforms" @selectedItem="selectPlatform"></HomePlatformList>
    <HomePackageIdList v-else-if="packageIds" :apps="packageIds" @selectedItem="selectPackageId"></HomePackageIdList>
  </div>
</template>

<script>
import { GetPackageIds } from "@/api/app";
import { GetPlatforms } from "@/api/app";
import { GetEnvironments } from "@/api/app";
import { GetVersions } from "@/api/app";
import { GetAppList } from "@/api/app";

import HomePackageIdList from "@/components/home/HomePackageIdList.vue";
import HomePlatformList from "@/components/home/HomePlatformList.vue";
import HomeEnvironmentList from "@/components/home/HomeEnvironmentList.vue";
import HomeVersionList from "@/components/home/HomeVersionList.vue";
import HomeAppList from "@/components/home/HomeAppList.vue";

export default {
  name: "home",
  components: {
    HomePackageIdList,
    HomePlatformList,
    HomeEnvironmentList,
    HomeVersionList,
    HomeAppList
  },
  data() {
    return {
      packageIds: null,
      packageId: null,
      platforms: null,
      platform: null,
      environments: null,
      environment: null,
      versions: null,
      version: null,
      apps: null
    };
  },
  created() {
    this.getPackageIds();
  },
  methods: {
    homeClick() {
      this.packageId = null;
      this.platforms = null;
      this.platform = null;
      this.environments = null;
      this.environment = null;
      this.versions = null;
      this.version = null;
      this.apps = null;
    },
    packageIdClick() {
      this.platform = null;
      this.environments = null;
      this.environment = null;
      this.versions = null;
      this.version = null;
      this.apps = null;
    },
    platformClick() {
      this.environment = null;
      this.versions = null;
      this.version = null;
      this.apps = null;
    },
    environmentClick() {
      this.version = null;
      this.apps = null;
    },
    versionClick() {
      this.$message.error("version");
    },
    async selectPackageId(app) {
      this.$loading({});
      try {
        let result = await GetPlatforms(app.packageId);
        this.packageId = app;
        this.platforms = result;
      } catch (error) {
        this.$message.error(error.message);
      }
      this.$loading().close();
    },
    async selectPlatform(app) {
      this.$loading({});
      try {
        let result = await GetEnvironments(app.packageId, app.platform);
        this.platform = app;
        this.environments = result;
      } catch (error) {
        this.$message.error(error.message);
      }
      this.$loading().close();
    },
    async selectEnvironment(app) {
      this.$loading({});
      try {
        let result = await GetVersions(
          app.packageId,
          app.platform,
          app.environment
        );
        this.environment = app;
        this.versions = result;
      } catch (error) {
        this.$message.error(error.message);
      }
      this.$loading().close();
    },
    async selectVersion(app) {
      this.$loading({});
      try {
        let result = await GetAppList(
          app.packageId,
          app.platform,
          app.environment,
          app.version
        );
        this.version = app;
        this.apps = result;
      } catch (error) {
        this.$message.error(error.message);
      }
      this.$loading().close();
    },
    selectApp(app) {
      this.$router.push("/download/" + app.id);
    },
    async getPackageIds() {
      this.$loading({});
      try {
        let result = await GetPackageIds();
        this.packageIds = result;
      } catch (error) {
        this.$message({
          message: error.message,
          type: "error"
        });
      }
      this.$loading().close();
    }
  }
};
</script>

<style scoped>
#content {
  border-color: whitesmoke;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 0.5rem;
  max-width: 80%;
  width: 30rem;
}
</style>