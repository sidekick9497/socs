pipeline {
  agent {
    node {
      label 'socs'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
  }
  environment {
    CI = 'true'
  }
}