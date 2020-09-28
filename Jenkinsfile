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
                sh 'docker run --net=host -v tests/:/opt/robotframework/test:Z ppodgorsek/robot-framework:latest'
            }
        }
    }
}