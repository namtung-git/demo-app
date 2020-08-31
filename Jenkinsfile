pipeline {
    agent { docker { image 'docker:18.09-git' } }
    stages {
        stage('build') {
            steps {
                sh 'docker build -t demo-app-jenkins .'
            }
        }
    }
}