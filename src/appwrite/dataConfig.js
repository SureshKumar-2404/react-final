import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) // Your API Endpoint
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(client);
        this.bucket = new Storage(client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, { title, content, featuredImage, status, userId });
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, { title, content, featuredImage, status, userId });
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, [
                Query.equal('status', ['Active']),
            ]);
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    //File Upload Services
    async fileUpload(file) {
        try {
            return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), document.getElementById('uploader').file);
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    async fileGet(fileId) {
        try {
            return await this.bucket.storage.getFile(config.appwriteBucketId, fileId);
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.storage.getFile(config.appwriteBucketId, fileId);
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    async filePreview(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId,fileId)
    }
}

const service = new Service()
export default service;