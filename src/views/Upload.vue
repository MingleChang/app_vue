<template>
  <div id="containter">
    <div id="uploadForm">
      <el-form ref="form" label-position="right">
        <el-form-item label="平台">
          <el-select v-model="platform" placeholder="请选择平台">
            <el-option v-for="item in platforms" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="环境">
          <el-select v-model="environment" allow-create=true filterable=true placeholder="请选择平台">
            <el-option v-for="item in environments" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文件">
          <el-upload
            action
            :http-request="handleFile"
            :on-remove="handleRemove"
            :multiple="false"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { UploadApp } from "@/api/app";
export default {
  name: "upload",
  data() {
    return {
      platforms: ["iOS", "Android"],
      platform: "",
      environments: ["PROD", "UAT", "TEST", "DEV"],
      environment: "",
      file: null
    };
  },
  methods: {
    handleFile(file) {
      this.file = file;
    },
    handleRemove() {
      this.file = null
    },
    handleExceed(files) {
      this.$message.warning(`最多上传 ${files.length} 个文件`);
    },
    async onSubmit() {

      this.$loading({});
      try {
        var formData = new FormData();
        formData.append("file", this.file.file);
        formData.append("platform", this.platform);
        formData.append("environment", this.environment);
        let result = await UploadApp(formData);
        this.$router.push('/download/'+result.id)
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
#uploadForm {
  padding: 1.5rem;
  max-width: 80%;
  width: 30rem;
}
#uploadForm .el-select{
  width: 100%;
}
#uploadForm .el-button{
  width: 100%;
}
</style>