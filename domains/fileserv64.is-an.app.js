addSubDomain({
  description: 'Will create a base64 encoding website',
  domain: 'is-an.app',
  subdomain: 'fileserv64',
  owner: {
    email: 'tijohncenna@gmail.com',
  },
  record: {
    NS: ['ns1.he.net', 'ns2.he.net', 'ns3.he.net', 'ns4.he.net', 'ns5.he.net'],
  },
  proxy: false
})
