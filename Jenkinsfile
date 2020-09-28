pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'ls'
                sh 'docker build -t demo-app-jenkins-v7 .'
            }
        }
        stage('test') {
            steps {
                sh 'robot tests/'
            }
        }
    }
}