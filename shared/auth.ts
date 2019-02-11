import Amplify from "@aws-amplify/core";
import Storage from "@aws-amplify/storage";
import { amplifyConfig } from "./config";

Amplify.configure(amplifyConfig);

Storage.configure({ level: "protected" });