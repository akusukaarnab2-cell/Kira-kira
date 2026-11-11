import java.util.Properties

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

val v = Properties().apply { file("../version.properties").inputStream().use { load(it) } }

android {
    namespace = "com.kirakira.app"
    compileSdk = 34
    defaultConfig {
        applicationId = "com.kirakira.app"
        minSdk = 24
        targetSdk = 34
        versionCode = v.getProperty("BUILD_NUMBER").toInt()
        versionName = v.getProperty("VERSION_NAME")
    }
    buildFeatures { buildConfig = true }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
}
