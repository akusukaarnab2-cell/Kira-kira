import java.util.Properties

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

val v = Properties().apply { file("../version.properties").inputStream().use { load(it) } }
val vName: String = v.getProperty("VERSION_NAME")
val vBuild: String = v.getProperty("BUILD_NUMBER")

android {
    namespace = "com.kirakira.app"
    compileSdk = 34
    defaultConfig {
        applicationId = "com.kirakira.app"
        minSdk = 24
        targetSdk = 34
        versionCode = vBuild.toInt()
        versionName = "$vName (Build $vBuild)"
        buildConfigField("String", "APP_VERSION", "\"$vName\"")
    }
    signingConfigs {
        getByName("debug") {
            storeFile = file("kalkulator.keystore")
            storePassword = "android"
            keyAlias = "androiddebugkey"
            keyPassword = "android"
        }
    }
    buildFeatures { buildConfig = true }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
}
