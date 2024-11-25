export const getServerUrl = (path: string) => {
  const host = 'http://ec2-54-180-251-225.ap-northeast-2.compute.amazonaws.com:8080'
  return [host, path].join('')
}
