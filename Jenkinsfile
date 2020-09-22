pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'ls'
                sh 'docker build -t demo-app-jenkins-v2 .'
            }
        }
    }
}