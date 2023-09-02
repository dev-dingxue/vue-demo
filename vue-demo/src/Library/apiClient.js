import axios, { HttpStatusCode } from "axios"
import Qs from "qs"

const baseURL = window.location.origin;

const ins = axios.create({
    baseURL: baseURL,
    timeout: 1000 * 10,
    timeoutErrorMessage: "您的请求已超时",
});

//拦截请求 request
ins.interceptors.request.use(config => {
    if (config.method.toLocaleLowerCase() == "GET") {
        config.paramsSerializer = (params) => {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
        }
    }

    if (config.method.toLocaleUpperCase() == "POST"
        && config.headers["Content-Type"] == "application/json") {
        config.data = () => {
            return JSON.stringify(config.data);
        }
    }

    const _Token = window.localStorage.getItem("user");
    config.headers["Authorization"] = _Token;

    return config;
}, (error) => {
    return Promise.reject(error)
});

//拦截请求 response
ins.interceptors.response.use(response => {
    const status = response.status;
    if (status == HttpStatusCode.Ok) {
        if (!response.data instanceof Object) {
            response.data = JSON.parse(response.data)
        }
    } else if (status == HttpStatusCode.Unauthorized) {
        console.error('当前用户未经授权');
        response.data = null;
    } else if (status == HttpStatusCode.InternalServerError) {
        console.error('出现了未知的错误，请联系管理员解决');
        response.data = null;
    } else if (status == HttpStatusCode.BadRequest) {
        console.error('请求的方法不存在');
        response.data = null;
    } else { }
    return response;
}, (error) => {
    return Promise.reject(error)
});

export default {

    async GET(url, params) {
        return await ins.get(url, {
            params: params
        });
    },

    async GET_DOWNLOAD(url) {
        ins.defaults.headers.common["Content-Type"] = "application/octet-stream";
        return await ins.get(url);
    },

    async POST_JSON(url, data) {
        ins.defaults.headers.common["Content-Type"] = "application/json";
        return await ins.post(url, data);
    },

    async POST_FILE(url, data) {
        ins.defaults.headers.common["Content-Type"] = "multipart/form-data";
        return await ins.post(url, data)
    },

    async PATCH(url, data) {
        ins.defaults.headers.common["Content-Type"] = "application/json";
        return await ins.patch(url, data)
    },

    async PUT(url, data) {
        ins.defaults.headers.common["Content-Type"] = "application/json";
        return await ins.put(url, data)
    },

    /**
     * 删除一个资源文件
     * @param {*} url 
     * @param {Object} data 
     * @returns 
     */
    async DEL(url, data) {
        return await ins.delete(url, {
            data: data
        })
    }

}