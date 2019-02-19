// Used by CircleCI job and assume-role tool to create necessary aws config files

const fs = require('fs');

let content = `\
[profile default]
region = eu-west-1

[profile ${process.env.STAGE}]
role_arn = arn:aws:iam::${process.env.AWS_CROSS_ACCOUNT_ID}:role/DeveloperAccess
source_profile = default
region = eu-west-1
`;

fs.writeFile(`${process.env.AWS_CONFIG_PATH}/config`, content, (err) => {
  if (err) throw err;
  console.log('aws config saved...');
});

content = `\
[default]
aws_access_key_id = ${process.env.AWS_MASTER_ACCESS_KEY_ID}
aws_secret_access_key = ${process.env.AWS_MASTER_SECRET_ACCESS_KEY}
`;

fs.writeFile(`${process.env.AWS_CONFIG_PATH}/credentials`, content, (err) => {
  if (err) throw err;
  console.log('aws credentials saved...');
});