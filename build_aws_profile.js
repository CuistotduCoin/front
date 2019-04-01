// Used by CircleCI job and assume-role tool to create necessary aws config files

const fs = require('fs');

content = `\
[default]
aws_access_key_id = ${process.env.aws_access_key_id_prod}
aws_secret_access_key = ${process.env.aws_secret_access_key_prod}
`;

fs.writeFile(`${process.env.AWS_CONFIG_PATH}/credentials`, content, (err) => {
  if (err) throw err;
  console.log('aws credentials saved...');
});