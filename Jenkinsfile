pipeline {
    agent { docker { image 'node:10.19-slim' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install --silent'
            }
        }
    }
}