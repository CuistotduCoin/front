// Used by CircleCI job and assume-role tool to create necessary aws config files

const fs = require('fs');

let content;

if (process.env.STAGE && process.env.AWS_CROSS_ACCOUNT_ID) {
  content = [
    "[profile default]",
    "region = eu-west-1",
    "\n",
    `[profile ${process.env.STAGE}]`,
    `role_arn = arn:aws:iam::${process.env.AWS_CROSS_ACCOUNT_ID}:role/DeveloperAccess`,
    "source_profile = default",
    "region = eu-west-1"
  ].join("\n");

  fs.writeFile(`${process.env.AWS_CONFIG_PATH}/config`, content, (err) => {
    if (err) throw err;
    console.log('aws config saved...');
  });
}

content = `\
[default]
aws_access_key_id = ${process.env.AWS_MASTER_ACCESS_KEY_ID}
aws_secret_access_key = ${process.env.AWS_MASTER_SECRET_ACCESS_KEY}
`;

fs.writeFile(`${process.env.AWS_CONFIG_PATH}/credentials`, content, (err) => {
  if (err) throw err;
  console.log('aws credentials saved...');
});
