node {
    try {
        stage('Environment') {
            sh 'git --version'
            echo "Branch: ${env.BRANCH_NAME}"
            sh 'docker -v'
            sh 'printenv'
        }
        stage('Build Docker'){
            sh 'docker build -t demo-app-jenkins --no-cache .'
        }

        stage('Deploy'){
            if(env.BRANCH_NAME == 'master'){
                sh 'docker tag demo-app-jenkins localhost:5000/demo-app-jenkins'
                sh 'docker push localhost:5000/demo-app-jenkins'
                sh 'docker rmi -f demo-app-jenkins localhost:5000/demo-app-jenkins'
            }
        }
    }
    catch (err) {
        throw err
    }
}