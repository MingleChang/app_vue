import {GET, POST} from './request'

export function GetAppInfo(appId) {
    return GET('/app/' + appId, null)
}

export function UploadApp(data) {
    return POST('/app/upload', data)
}

export function GetPackageIds() {
    return GET('/app/packageids', null)
}

export function GetPlatforms(packageId) {
    let params = {"packageid": packageId}
    return GET('/app/platforms', params)
}

export function GetEnvironments(packageId, platform) {
    let params = {"packageid": packageId, "platform": platform}
    return GET('/app/environments', params)
}

export function GetVersions(packageId, platform, environment) {
    let params = {"packageid": packageId, "platform": platform, "environment": environment}
    return GET('/app/versions', params)
}

export function GetAppList(packageId, platform, environment, version) {
    let params = {"packageid": packageId, "platform": platform, "environment": environment, "version": version}
    return GET('/app/list', params)
}