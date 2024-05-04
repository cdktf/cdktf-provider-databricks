# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-databricks.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-databricks.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.Cluster;

Cluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .sparkVersion(java.lang.String)
//  .applyPolicyDefaultValues(java.lang.Boolean)
//  .applyPolicyDefaultValues(IResolvable)
//  .autoscale(ClusterAutoscale)
//  .autoterminationMinutes(java.lang.Number)
//  .awsAttributes(ClusterAwsAttributes)
//  .azureAttributes(ClusterAzureAttributes)
//  .cloneFrom(ClusterCloneFrom)
//  .clusterLogConf(ClusterClusterLogConf)
//  .clusterMountInfo(IResolvable)
//  .clusterMountInfo(java.util.List<ClusterClusterMountInfo>)
//  .clusterName(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dataSecurityMode(java.lang.String)
//  .dockerImage(ClusterDockerImage)
//  .driverInstancePoolId(java.lang.String)
//  .driverNodeTypeId(java.lang.String)
//  .enableElasticDisk(java.lang.Boolean)
//  .enableElasticDisk(IResolvable)
//  .enableLocalDiskEncryption(java.lang.Boolean)
//  .enableLocalDiskEncryption(IResolvable)
//  .gcpAttributes(ClusterGcpAttributes)
//  .id(java.lang.String)
//  .idempotencyToken(java.lang.String)
//  .initScripts(IResolvable)
//  .initScripts(java.util.List<ClusterInitScripts>)
//  .instancePoolId(java.lang.String)
//  .isPinned(java.lang.Boolean)
//  .isPinned(IResolvable)
//  .library(IResolvable)
//  .library(java.util.List<ClusterLibrary>)
//  .nodeTypeId(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .policyId(java.lang.String)
//  .runtimeEngine(java.lang.String)
//  .singleUserName(java.lang.String)
//  .sparkConf(java.util.Map<java.lang.String, java.lang.String>)
//  .sparkEnvVars(java.util.Map<java.lang.String, java.lang.String>)
//  .sshPublicKeys(java.util.List<java.lang.String>)
//  .timeouts(ClusterTimeouts)
//  .workloadType(ClusterWorkloadType)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoterminationMinutes">autoterminationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.cloneFrom">cloneFrom</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a></code> | clone_from block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterMountInfo">clusterMountInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>></code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dataSecurityMode">dataSecurityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dockerImage">dockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverInstancePoolId">driverInstancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverNodeTypeId">driverNodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableElasticDisk">enableElasticDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.idempotencyToken">idempotencyToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.initScripts">initScripts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>></code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.isPinned">isPinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.library">library</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>></code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.runtimeEngine">runtimeEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.singleUserName">singleUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkConf">sparkConf</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkEnvVars">sparkEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.workloadType">workloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `applyPolicyDefaultValues`<sup>Optional</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.applyPolicyDefaultValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `autoterminationMinutes`<sup>Optional</sup> <a name="autoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoterminationMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.awsAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.azureAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `cloneFrom`<sup>Optional</sup> <a name="cloneFrom" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.cloneFrom"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a>

clone_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#clone_from Cluster#clone_from}

---

##### `clusterLogConf`<sup>Optional</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterLogConf"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `clusterMountInfo`<sup>Optional</sup> <a name="clusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterMountInfo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>>

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.customTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `dataSecurityMode`<sup>Optional</sup> <a name="dataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dataSecurityMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dockerImage"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `driverInstancePoolId`<sup>Optional</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverInstancePoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `driverNodeTypeId`<sup>Optional</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverNodeTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `enableElasticDisk`<sup>Optional</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableElasticDisk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `enableLocalDiskEncryption`<sup>Optional</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableLocalDiskEncryption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.gcpAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idempotencyToken`<sup>Optional</sup> <a name="idempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.idempotencyToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `initScripts`<sup>Optional</sup> <a name="initScripts" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.initScripts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>>

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.instancePoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.isPinned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.library"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>>

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#library Cluster#library}

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.nodeTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.numWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `runtimeEngine`<sup>Optional</sup> <a name="runtimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.runtimeEngine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `singleUserName`<sup>Optional</sup> <a name="singleUserName" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.singleUserName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `sparkConf`<sup>Optional</sup> <a name="sparkConf" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkConf"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `sparkEnvVars`<sup>Optional</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkEnvVars"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.workloadType"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#workload_type Cluster#workload_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes">putAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes">putAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putCloneFrom">putCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf">putClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo">putClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putDockerImage">putDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes">putGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putInitScripts">putInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putLibrary">putLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putWorkloadType">putWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues">resetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes">resetAutoterminationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes">resetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes">resetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetCloneFrom">resetCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf">resetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo">resetClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode">resetDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDockerImage">resetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId">resetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId">resetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk">resetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption">resetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes">resetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken">resetIdempotencyToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInitScripts">resetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIsPinned">resetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetLibrary">resetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId">resetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine">resetRuntimeEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName">resetSingleUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkConf">resetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars">resetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.Cluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.cluster.Cluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.cluster.Cluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.cluster.Cluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.cluster.Cluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.cluster.Cluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.cluster.Cluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale"></a>

```java
public void putAutoscale(ClusterAutoscale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `putAwsAttributes` <a name="putAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes"></a>

```java
public void putAwsAttributes(ClusterAwsAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `putAzureAttributes` <a name="putAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes"></a>

```java
public void putAzureAttributes(ClusterAzureAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `putCloneFrom` <a name="putCloneFrom" id="@cdktf/provider-databricks.cluster.Cluster.putCloneFrom"></a>

```java
public void putCloneFrom(ClusterCloneFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putCloneFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a>

---

##### `putClusterLogConf` <a name="putClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf"></a>

```java
public void putClusterLogConf(ClusterClusterLogConf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `putClusterMountInfo` <a name="putClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo"></a>

```java
public void putClusterMountInfo(IResolvable OR java.util.List<ClusterClusterMountInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>>

---

##### `putDockerImage` <a name="putDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage"></a>

```java
public void putDockerImage(ClusterDockerImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `putGcpAttributes` <a name="putGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes"></a>

```java
public void putGcpAttributes(ClusterGcpAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `putInitScripts` <a name="putInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts"></a>

```java
public void putInitScripts(IResolvable OR java.util.List<ClusterInitScripts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>>

---

##### `putLibrary` <a name="putLibrary" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary"></a>

```java
public void putLibrary(IResolvable OR java.util.List<ClusterLibrary> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts"></a>

```java
public void putTimeouts(ClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `putWorkloadType` <a name="putWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType"></a>

```java
public void putWorkloadType(ClusterWorkloadType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `resetApplyPolicyDefaultValues` <a name="resetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues"></a>

```java
public void resetApplyPolicyDefaultValues()
```

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoscale"></a>

```java
public void resetAutoscale()
```

##### `resetAutoterminationMinutes` <a name="resetAutoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes"></a>

```java
public void resetAutoterminationMinutes()
```

##### `resetAwsAttributes` <a name="resetAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes"></a>

```java
public void resetAwsAttributes()
```

##### `resetAzureAttributes` <a name="resetAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes"></a>

```java
public void resetAzureAttributes()
```

##### `resetCloneFrom` <a name="resetCloneFrom" id="@cdktf/provider-databricks.cluster.Cluster.resetCloneFrom"></a>

```java
public void resetCloneFrom()
```

##### `resetClusterLogConf` <a name="resetClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf"></a>

```java
public void resetClusterLogConf()
```

##### `resetClusterMountInfo` <a name="resetClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo"></a>

```java
public void resetClusterMountInfo()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.cluster.Cluster.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDataSecurityMode` <a name="resetDataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode"></a>

```java
public void resetDataSecurityMode()
```

##### `resetDockerImage` <a name="resetDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.resetDockerImage"></a>

```java
public void resetDockerImage()
```

##### `resetDriverInstancePoolId` <a name="resetDriverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId"></a>

```java
public void resetDriverInstancePoolId()
```

##### `resetDriverNodeTypeId` <a name="resetDriverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId"></a>

```java
public void resetDriverNodeTypeId()
```

##### `resetEnableElasticDisk` <a name="resetEnableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk"></a>

```java
public void resetEnableElasticDisk()
```

##### `resetEnableLocalDiskEncryption` <a name="resetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption"></a>

```java
public void resetEnableLocalDiskEncryption()
```

##### `resetGcpAttributes` <a name="resetGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes"></a>

```java
public void resetGcpAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.cluster.Cluster.resetId"></a>

```java
public void resetId()
```

##### `resetIdempotencyToken` <a name="resetIdempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken"></a>

```java
public void resetIdempotencyToken()
```

##### `resetInitScripts` <a name="resetInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.resetInitScripts"></a>

```java
public void resetInitScripts()
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId"></a>

```java
public void resetInstancePoolId()
```

##### `resetIsPinned` <a name="resetIsPinned" id="@cdktf/provider-databricks.cluster.Cluster.resetIsPinned"></a>

```java
public void resetIsPinned()
```

##### `resetLibrary` <a name="resetLibrary" id="@cdktf/provider-databricks.cluster.Cluster.resetLibrary"></a>

```java
public void resetLibrary()
```

##### `resetNodeTypeId` <a name="resetNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId"></a>

```java
public void resetNodeTypeId()
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers"></a>

```java
public void resetNumWorkers()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-databricks.cluster.Cluster.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetRuntimeEngine` <a name="resetRuntimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine"></a>

```java
public void resetRuntimeEngine()
```

##### `resetSingleUserName` <a name="resetSingleUserName" id="@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName"></a>

```java
public void resetSingleUserName()
```

##### `resetSparkConf` <a name="resetSparkConf" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkConf"></a>

```java
public void resetSparkConf()
```

##### `resetSparkEnvVars` <a name="resetSparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars"></a>

```java
public void resetSparkEnvVars()
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys"></a>

```java
public void resetSshPublicKeys()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType"></a>

```java
public void resetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.Cluster;

Cluster.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.Cluster;

Cluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.Cluster;

Cluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.Cluster;

Cluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Cluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cloneFrom">cloneFrom</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference">ClusterCloneFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo">clusterMountInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterSource">clusterSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.defaultTags">defaultTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImage">dockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScripts">initScripts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.library">library</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadType">workloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput">applyPolicyDefaultValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput">autoterminationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput">awsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput">azureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cloneFromInput">cloneFromInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput">clusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput">clusterMountInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput">dataSecurityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput">dockerImageInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput">driverInstancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput">driverNodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput">enableElasticDiskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput">enableLocalDiskEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput">gcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput">idempotencyTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput">initScriptsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput">isPinnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.libraryInput">libraryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput">numWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput">runtimeEngineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput">singleUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput">sparkConfInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput">sparkEnvVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput">sparkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput">workloadTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes">autoterminationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode">dataSecurityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId">driverInstancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId">driverNodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk">enableElasticDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken">idempotencyToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinned">isPinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine">runtimeEngine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserName">singleUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConf">sparkConf</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars">sparkEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.cluster.Cluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.Cluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.Cluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.Cluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cluster.Cluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cluster.Cluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.Cluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscale"></a>

```java
public ClusterAutoscaleOutputReference getAutoscale();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a>

---

##### `awsAttributes`<sup>Required</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes"></a>

```java
public ClusterAwsAttributesOutputReference getAwsAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a>

---

##### `azureAttributes`<sup>Required</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes"></a>

```java
public ClusterAzureAttributesOutputReference getAzureAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a>

---

##### `cloneFrom`<sup>Required</sup> <a name="cloneFrom" id="@cdktf/provider-databricks.cluster.Cluster.property.cloneFrom"></a>

```java
public ClusterCloneFromOutputReference getCloneFrom();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference">ClusterCloneFromOutputReference</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterLogConf`<sup>Required</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf"></a>

```java
public ClusterClusterLogConfOutputReference getClusterLogConf();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a>

---

##### `clusterMountInfo`<sup>Required</sup> <a name="clusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo"></a>

```java
public ClusterClusterMountInfoList getClusterMountInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a>

---

##### `clusterSource`<sup>Required</sup> <a name="clusterSource" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterSource"></a>

```java
public java.lang.String getClusterSource();
```

- *Type:* java.lang.String

---

##### `defaultTags`<sup>Required</sup> <a name="defaultTags" id="@cdktf/provider-databricks.cluster.Cluster.property.defaultTags"></a>

```java
public StringMap getDefaultTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `dockerImage`<sup>Required</sup> <a name="dockerImage" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImage"></a>

```java
public ClusterDockerImageOutputReference getDockerImage();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a>

---

##### `gcpAttributes`<sup>Required</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes"></a>

```java
public ClusterGcpAttributesOutputReference getGcpAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a>

---

##### `initScripts`<sup>Required</sup> <a name="initScripts" id="@cdktf/provider-databricks.cluster.Cluster.property.initScripts"></a>

```java
public ClusterInitScriptsList getInitScripts();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a>

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-databricks.cluster.Cluster.property.library"></a>

```java
public ClusterLibraryList getLibrary();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.cluster.Cluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.Cluster.property.timeouts"></a>

```java
public ClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.Cluster.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadType"></a>

```java
public ClusterWorkloadTypeOutputReference getWorkloadType();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a>

---

##### `applyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="applyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput"></a>

```java
public java.lang.Object getApplyPolicyDefaultValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput"></a>

```java
public ClusterAutoscale getAutoscaleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `autoterminationMinutesInput`<sup>Optional</sup> <a name="autoterminationMinutesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput"></a>

```java
public java.lang.Number getAutoterminationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `awsAttributesInput`<sup>Optional</sup> <a name="awsAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput"></a>

```java
public ClusterAwsAttributes getAwsAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `azureAttributesInput`<sup>Optional</sup> <a name="azureAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput"></a>

```java
public ClusterAzureAttributes getAzureAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `cloneFromInput`<sup>Optional</sup> <a name="cloneFromInput" id="@cdktf/provider-databricks.cluster.Cluster.property.cloneFromInput"></a>

```java
public ClusterCloneFrom getCloneFromInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a>

---

##### `clusterLogConfInput`<sup>Optional</sup> <a name="clusterLogConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput"></a>

```java
public ClusterClusterLogConf getClusterLogConfInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `clusterMountInfoInput`<sup>Optional</sup> <a name="clusterMountInfoInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput"></a>

```java
public java.lang.Object getClusterMountInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataSecurityModeInput`<sup>Optional</sup> <a name="dataSecurityModeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput"></a>

```java
public java.lang.String getDataSecurityModeInput();
```

- *Type:* java.lang.String

---

##### `dockerImageInput`<sup>Optional</sup> <a name="dockerImageInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput"></a>

```java
public ClusterDockerImage getDockerImageInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `driverInstancePoolIdInput`<sup>Optional</sup> <a name="driverInstancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput"></a>

```java
public java.lang.String getDriverInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `driverNodeTypeIdInput`<sup>Optional</sup> <a name="driverNodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput"></a>

```java
public java.lang.String getDriverNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `enableElasticDiskInput`<sup>Optional</sup> <a name="enableElasticDiskInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput"></a>

```java
public java.lang.Object getEnableElasticDiskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="enableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput"></a>

```java
public java.lang.Object getEnableLocalDiskEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpAttributesInput`<sup>Optional</sup> <a name="gcpAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput"></a>

```java
public ClusterGcpAttributes getGcpAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `idempotencyTokenInput`<sup>Optional</sup> <a name="idempotencyTokenInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput"></a>

```java
public java.lang.String getIdempotencyTokenInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initScriptsInput`<sup>Optional</sup> <a name="initScriptsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput"></a>

```java
public java.lang.Object getInitScriptsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>>

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput"></a>

```java
public java.lang.String getInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `isPinnedInput`<sup>Optional</sup> <a name="isPinnedInput" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput"></a>

```java
public java.lang.Object getIsPinnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `libraryInput`<sup>Optional</sup> <a name="libraryInput" id="@cdktf/provider-databricks.cluster.Cluster.property.libraryInput"></a>

```java
public java.lang.Object getLibraryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>>

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput"></a>

```java
public java.lang.String getNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput"></a>

```java
public java.lang.Number getNumWorkersInput();
```

- *Type:* java.lang.Number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `runtimeEngineInput`<sup>Optional</sup> <a name="runtimeEngineInput" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput"></a>

```java
public java.lang.String getRuntimeEngineInput();
```

- *Type:* java.lang.String

---

##### `singleUserNameInput`<sup>Optional</sup> <a name="singleUserNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput"></a>

```java
public java.lang.String getSingleUserNameInput();
```

- *Type:* java.lang.String

---

##### `sparkConfInput`<sup>Optional</sup> <a name="sparkConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkConfInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkEnvVarsInput`<sup>Optional</sup> <a name="sparkEnvVarsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkEnvVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkVersionInput`<sup>Optional</sup> <a name="sparkVersionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput"></a>

```java
public java.lang.String getSparkVersionInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput"></a>

```java
public ClusterWorkloadType getWorkloadTypeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `applyPolicyDefaultValues`<sup>Required</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues"></a>

```java
public java.lang.Object getApplyPolicyDefaultValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoterminationMinutes`<sup>Required</sup> <a name="autoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes"></a>

```java
public java.lang.Number getAutoterminationMinutes();
```

- *Type:* java.lang.Number

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.cluster.Cluster.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataSecurityMode`<sup>Required</sup> <a name="dataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode"></a>

```java
public java.lang.String getDataSecurityMode();
```

- *Type:* java.lang.String

---

##### `driverInstancePoolId`<sup>Required</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId"></a>

```java
public java.lang.String getDriverInstancePoolId();
```

- *Type:* java.lang.String

---

##### `driverNodeTypeId`<sup>Required</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId"></a>

```java
public java.lang.String getDriverNodeTypeId();
```

- *Type:* java.lang.String

---

##### `enableElasticDisk`<sup>Required</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk"></a>

```java
public java.lang.Object getEnableElasticDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLocalDiskEncryption`<sup>Required</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption"></a>

```java
public java.lang.Object getEnableLocalDiskEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idempotencyToken`<sup>Required</sup> <a name="idempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken"></a>

```java
public java.lang.String getIdempotencyToken();
```

- *Type:* java.lang.String

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `isPinned`<sup>Required</sup> <a name="isPinned" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinned"></a>

```java
public java.lang.Object getIsPinned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.cluster.Cluster.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `runtimeEngine`<sup>Required</sup> <a name="runtimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine"></a>

```java
public java.lang.String getRuntimeEngine();
```

- *Type:* java.lang.String

---

##### `singleUserName`<sup>Required</sup> <a name="singleUserName" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserName"></a>

```java
public java.lang.String getSingleUserName();
```

- *Type:* java.lang.String

---

##### `sparkConf`<sup>Required</sup> <a name="sparkConf" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConf"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkConf();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkEnvVars`<sup>Required</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAutoscale <a name="ClusterAutoscale" id="@cdktf/provider-databricks.cluster.ClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAutoscale;

ClusterAutoscale.builder()
//  .maxWorkers(java.lang.Number)
//  .minWorkers(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#max_workers Cluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#min_workers Cluster#min_workers}. |

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#max_workers Cluster#max_workers}.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#min_workers Cluster#min_workers}.

---

### ClusterAwsAttributes <a name="ClusterAwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAwsAttributes;

ClusterAwsAttributes.builder()
//  .availability(java.lang.String)
//  .ebsVolumeCount(java.lang.Number)
//  .ebsVolumeIops(java.lang.Number)
//  .ebsVolumeSize(java.lang.Number)
//  .ebsVolumeThroughput(java.lang.Number)
//  .ebsVolumeType(java.lang.String)
//  .firstOnDemand(java.lang.Number)
//  .instanceProfileArn(java.lang.String)
//  .spotBidPricePercent(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount">ebsVolumeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeIops">ebsVolumeIops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_iops Cluster#ebs_volume_iops}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeThroughput">ebsVolumeThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_throughput Cluster#ebs_volume_throughput}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `ebsVolumeCount`<sup>Optional</sup> <a name="ebsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount"></a>

```java
public java.lang.Number getEbsVolumeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}.

---

##### `ebsVolumeIops`<sup>Optional</sup> <a name="ebsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeIops"></a>

```java
public java.lang.Number getEbsVolumeIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_iops Cluster#ebs_volume_iops}.

---

##### `ebsVolumeSize`<sup>Optional</sup> <a name="ebsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize"></a>

```java
public java.lang.Number getEbsVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}.

---

##### `ebsVolumeThroughput`<sup>Optional</sup> <a name="ebsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeThroughput"></a>

```java
public java.lang.Number getEbsVolumeThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_throughput Cluster#ebs_volume_throughput}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}.

---

##### `firstOnDemand`<sup>Optional</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}.

---

##### `spotBidPricePercent`<sup>Optional</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent"></a>

```java
public java.lang.Number getSpotBidPricePercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterAzureAttributes <a name="ClusterAzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAzureAttributes;

ClusterAzureAttributes.builder()
//  .availability(java.lang.String)
//  .firstOnDemand(java.lang.Number)
//  .logAnalyticsInfo(ClusterAzureAttributesLogAnalyticsInfo)
//  .spotBidMaxPrice(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.logAnalyticsInfo">logAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | log_analytics_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `firstOnDemand`<sup>Optional</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `logAnalyticsInfo`<sup>Optional</sup> <a name="logAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.logAnalyticsInfo"></a>

```java
public ClusterAzureAttributesLogAnalyticsInfo getLogAnalyticsInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

log_analytics_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#log_analytics_info Cluster#log_analytics_info}

---

##### `spotBidMaxPrice`<sup>Optional</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice"></a>

```java
public java.lang.Number getSpotBidMaxPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}.

---

### ClusterAzureAttributesLogAnalyticsInfo <a name="ClusterAzureAttributesLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo;

ClusterAzureAttributesLogAnalyticsInfo.builder()
//  .logAnalyticsPrimaryKey(java.lang.String)
//  .logAnalyticsWorkspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey">logAnalyticsPrimaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#log_analytics_primary_key Cluster#log_analytics_primary_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#log_analytics_workspace_id Cluster#log_analytics_workspace_id}. |

---

##### `logAnalyticsPrimaryKey`<sup>Optional</sup> <a name="logAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey"></a>

```java
public java.lang.String getLogAnalyticsPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#log_analytics_primary_key Cluster#log_analytics_primary_key}.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#log_analytics_workspace_id Cluster#log_analytics_workspace_id}.

---

### ClusterCloneFrom <a name="ClusterCloneFrom" id="@cdktf/provider-databricks.cluster.ClusterCloneFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterCloneFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterCloneFrom;

ClusterCloneFrom.builder()
    .sourceClusterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom.property.sourceClusterId">sourceClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#source_cluster_id Cluster#source_cluster_id}. |

---

##### `sourceClusterId`<sup>Required</sup> <a name="sourceClusterId" id="@cdktf/provider-databricks.cluster.ClusterCloneFrom.property.sourceClusterId"></a>

```java
public java.lang.String getSourceClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#source_cluster_id Cluster#source_cluster_id}.

---

### ClusterClusterLogConf <a name="ClusterClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterLogConf;

ClusterClusterLogConf.builder()
//  .dbfs(ClusterClusterLogConfDbfs)
//  .s3(ClusterClusterLogConfS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs"></a>

```java
public ClusterClusterLogConfDbfs getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3"></a>

```java
public ClusterClusterLogConfS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#s3 Cluster#s3}

---

### ClusterClusterLogConfDbfs <a name="ClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterLogConfDbfs;

ClusterClusterLogConfDbfs.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterClusterLogConfS3 <a name="ClusterClusterLogConfS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterLogConfS3;

ClusterClusterLogConfS3.builder()
    .destination(java.lang.String)
//  .cannedAcl(java.lang.String)
//  .enableEncryption(java.lang.Boolean)
//  .enableEncryption(IResolvable)
//  .encryptionType(java.lang.String)
//  .endpoint(java.lang.String)
//  .kmsKey(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#region Cluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `cannedAcl`<sup>Optional</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `enableEncryption`<sup>Optional</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterClusterMountInfo <a name="ClusterClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterMountInfo;

ClusterClusterMountInfo.builder()
    .localMountDirPath(java.lang.String)
    .networkFilesystemInfo(ClusterClusterMountInfoNetworkFilesystemInfo)
//  .remoteMountDirPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath">localMountDirPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo">networkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | network_filesystem_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath">remoteMountDirPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}. |

---

##### `localMountDirPath`<sup>Required</sup> <a name="localMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath"></a>

```java
public java.lang.String getLocalMountDirPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}.

---

##### `networkFilesystemInfo`<sup>Required</sup> <a name="networkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo"></a>

```java
public ClusterClusterMountInfoNetworkFilesystemInfo getNetworkFilesystemInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

network_filesystem_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#network_filesystem_info Cluster#network_filesystem_info}

---

##### `remoteMountDirPath`<sup>Optional</sup> <a name="remoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath"></a>

```java
public java.lang.String getRemoteMountDirPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}.

---

### ClusterClusterMountInfoNetworkFilesystemInfo <a name="ClusterClusterMountInfoNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo;

ClusterClusterMountInfoNetworkFilesystemInfo.builder()
    .serverAddress(java.lang.String)
//  .mountOptions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress">serverAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#server_address Cluster#server_address}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#mount_options Cluster#mount_options}. |

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress"></a>

```java
public java.lang.String getServerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#server_address Cluster#server_address}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#mount_options Cluster#mount_options}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-databricks.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterConfig;

ClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .sparkVersion(java.lang.String)
//  .applyPolicyDefaultValues(java.lang.Boolean)
//  .applyPolicyDefaultValues(IResolvable)
//  .autoscale(ClusterAutoscale)
//  .autoterminationMinutes(java.lang.Number)
//  .awsAttributes(ClusterAwsAttributes)
//  .azureAttributes(ClusterAzureAttributes)
//  .cloneFrom(ClusterCloneFrom)
//  .clusterLogConf(ClusterClusterLogConf)
//  .clusterMountInfo(IResolvable)
//  .clusterMountInfo(java.util.List<ClusterClusterMountInfo>)
//  .clusterName(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dataSecurityMode(java.lang.String)
//  .dockerImage(ClusterDockerImage)
//  .driverInstancePoolId(java.lang.String)
//  .driverNodeTypeId(java.lang.String)
//  .enableElasticDisk(java.lang.Boolean)
//  .enableElasticDisk(IResolvable)
//  .enableLocalDiskEncryption(java.lang.Boolean)
//  .enableLocalDiskEncryption(IResolvable)
//  .gcpAttributes(ClusterGcpAttributes)
//  .id(java.lang.String)
//  .idempotencyToken(java.lang.String)
//  .initScripts(IResolvable)
//  .initScripts(java.util.List<ClusterInitScripts>)
//  .instancePoolId(java.lang.String)
//  .isPinned(java.lang.Boolean)
//  .isPinned(IResolvable)
//  .library(IResolvable)
//  .library(java.util.List<ClusterLibrary>)
//  .nodeTypeId(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .policyId(java.lang.String)
//  .runtimeEngine(java.lang.String)
//  .singleUserName(java.lang.String)
//  .sparkConf(java.util.Map<java.lang.String, java.lang.String>)
//  .sparkEnvVars(java.util.Map<java.lang.String, java.lang.String>)
//  .sshPublicKeys(java.util.List<java.lang.String>)
//  .timeouts(ClusterTimeouts)
//  .workloadType(ClusterWorkloadType)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion">sparkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes">autoterminationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.cloneFrom">cloneFrom</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a></code> | clone_from block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo">clusterMountInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>></code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode">dataSecurityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage">dockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId">driverInstancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId">driverNodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk">enableElasticDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken">idempotencyToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts">initScripts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>></code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned">isPinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.library">library</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>></code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine">runtimeEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName">singleUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf">sparkConf</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars">sparkEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType">workloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion"></a>

```java
public java.lang.String getSparkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `applyPolicyDefaultValues`<sup>Optional</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues"></a>

```java
public java.lang.Object getApplyPolicyDefaultValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale"></a>

```java
public ClusterAutoscale getAutoscale();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `autoterminationMinutes`<sup>Optional</sup> <a name="autoterminationMinutes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes"></a>

```java
public java.lang.Number getAutoterminationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes"></a>

```java
public ClusterAwsAttributes getAwsAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes"></a>

```java
public ClusterAzureAttributes getAzureAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `cloneFrom`<sup>Optional</sup> <a name="cloneFrom" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.cloneFrom"></a>

```java
public ClusterCloneFrom getCloneFrom();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a>

clone_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#clone_from Cluster#clone_from}

---

##### `clusterLogConf`<sup>Optional</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf"></a>

```java
public ClusterClusterLogConf getClusterLogConf();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `clusterMountInfo`<sup>Optional</sup> <a name="clusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo"></a>

```java
public java.lang.Object getClusterMountInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>>

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `dataSecurityMode`<sup>Optional</sup> <a name="dataSecurityMode" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode"></a>

```java
public java.lang.String getDataSecurityMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage"></a>

```java
public ClusterDockerImage getDockerImage();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `driverInstancePoolId`<sup>Optional</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId"></a>

```java
public java.lang.String getDriverInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `driverNodeTypeId`<sup>Optional</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId"></a>

```java
public java.lang.String getDriverNodeTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `enableElasticDisk`<sup>Optional</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk"></a>

```java
public java.lang.Object getEnableElasticDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `enableLocalDiskEncryption`<sup>Optional</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption"></a>

```java
public java.lang.Object getEnableLocalDiskEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes"></a>

```java
public ClusterGcpAttributes getGcpAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idempotencyToken`<sup>Optional</sup> <a name="idempotencyToken" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken"></a>

```java
public java.lang.String getIdempotencyToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `initScripts`<sup>Optional</sup> <a name="initScripts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts"></a>

```java
public java.lang.Object getInitScripts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>>

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned"></a>

```java
public java.lang.Object getIsPinned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.library"></a>

```java
public java.lang.Object getLibrary();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>>

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#library Cluster#library}

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `runtimeEngine`<sup>Optional</sup> <a name="runtimeEngine" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine"></a>

```java
public java.lang.String getRuntimeEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `singleUserName`<sup>Optional</sup> <a name="singleUserName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName"></a>

```java
public java.lang.String getSingleUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `sparkConf`<sup>Optional</sup> <a name="sparkConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkConf();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `sparkEnvVars`<sup>Optional</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts"></a>

```java
public ClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType"></a>

```java
public ClusterWorkloadType getWorkloadType();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#workload_type Cluster#workload_type}

---

### ClusterDockerImage <a name="ClusterDockerImage" id="@cdktf/provider-databricks.cluster.ClusterDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterDockerImage;

ClusterDockerImage.builder()
    .url(java.lang.String)
//  .basicAuth(ClusterDockerImageBasicAuth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#url Cluster#url}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#url Cluster#url}.

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth"></a>

```java
public ClusterDockerImageBasicAuth getBasicAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#basic_auth Cluster#basic_auth}

---

### ClusterDockerImageBasicAuth <a name="ClusterDockerImageBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterDockerImageBasicAuth;

ClusterDockerImageBasicAuth.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#password Cluster#password}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#username Cluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#password Cluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#username Cluster#username}.

---

### ClusterGcpAttributes <a name="ClusterGcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterGcpAttributes;

ClusterGcpAttributes.builder()
//  .availability(java.lang.String)
//  .bootDiskSize(java.lang.Number)
//  .googleServiceAccount(java.lang.String)
//  .localSsdCount(java.lang.Number)
//  .usePreemptibleExecutors(java.lang.Boolean)
//  .usePreemptibleExecutors(IResolvable)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize">bootDiskSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#google_service_account Cluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors">usePreemptibleExecutors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `bootDiskSize`<sup>Optional</sup> <a name="bootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize"></a>

```java
public java.lang.Number getBootDiskSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#google_service_account Cluster#google_service_account}.

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}.

---

##### `usePreemptibleExecutors`<sup>Optional</sup> <a name="usePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors"></a>

```java
public java.lang.Object getUsePreemptibleExecutors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterInitScripts <a name="ClusterInitScripts" id="@cdktf/provider-databricks.cluster.ClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScripts;

ClusterInitScripts.builder()
//  .abfss(ClusterInitScriptsAbfss)
//  .dbfs(ClusterInitScriptsDbfs)
//  .file(ClusterInitScriptsFile)
//  .gcs(ClusterInitScriptsGcs)
//  .s3(ClusterInitScriptsS3)
//  .volumes(ClusterInitScriptsVolumes)
//  .workspace(ClusterInitScriptsWorkspace)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `abfss`<sup>Optional</sup> <a name="abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss"></a>

```java
public ClusterInitScriptsAbfss getAbfss();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#abfss Cluster#abfss}

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs"></a>

```java
public ClusterInitScriptsDbfs getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file"></a>

```java
public ClusterInitScriptsFile getFile();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#file Cluster#file}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs"></a>

```java
public ClusterInitScriptsGcs getGcs();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#gcs Cluster#gcs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3"></a>

```java
public ClusterInitScriptsS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#s3 Cluster#s3}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes"></a>

```java
public ClusterInitScriptsVolumes getVolumes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#volumes Cluster#volumes}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace"></a>

```java
public ClusterInitScriptsWorkspace getWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#workspace Cluster#workspace}

---

### ClusterInitScriptsAbfss <a name="ClusterInitScriptsAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsAbfss;

ClusterInitScriptsAbfss.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsDbfs <a name="ClusterInitScriptsDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsDbfs;

ClusterInitScriptsDbfs.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsFile <a name="ClusterInitScriptsFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsFile;

ClusterInitScriptsFile.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsGcs <a name="ClusterInitScriptsGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsGcs;

ClusterInitScriptsGcs.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsS3 <a name="ClusterInitScriptsS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsS3;

ClusterInitScriptsS3.builder()
    .destination(java.lang.String)
//  .cannedAcl(java.lang.String)
//  .enableEncryption(java.lang.Boolean)
//  .enableEncryption(IResolvable)
//  .encryptionType(java.lang.String)
//  .endpoint(java.lang.String)
//  .kmsKey(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#region Cluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `cannedAcl`<sup>Optional</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `enableEncryption`<sup>Optional</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterInitScriptsVolumes <a name="ClusterInitScriptsVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsVolumes;

ClusterInitScriptsVolumes.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsWorkspace <a name="ClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsWorkspace;

ClusterInitScriptsWorkspace.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterLibrary <a name="ClusterLibrary" id="@cdktf/provider-databricks.cluster.ClusterLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibrary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibrary;

ClusterLibrary.builder()
//  .cran(ClusterLibraryCran)
//  .egg(java.lang.String)
//  .jar(java.lang.String)
//  .maven(ClusterLibraryMaven)
//  .pypi(ClusterLibraryPypi)
//  .requirements(java.lang.String)
//  .whl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg">egg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#egg Cluster#egg}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#jar Cluster#jar}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.requirements">requirements</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#requirements Cluster#requirements}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#whl Cluster#whl}. |

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran"></a>

```java
public ClusterLibraryCran getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#cran Cluster#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#egg Cluster#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#jar Cluster#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven"></a>

```java
public ClusterLibraryMaven getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#maven Cluster#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi"></a>

```java
public ClusterLibraryPypi getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#pypi Cluster#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#requirements Cluster#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#whl Cluster#whl}.

---

### ClusterLibraryCran <a name="ClusterLibraryCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryCran;

ClusterLibraryCran.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#package Cluster#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryMaven <a name="ClusterLibraryMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryMaven;

ClusterLibraryMaven.builder()
    .coordinates(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#coordinates Cluster#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#exclusions Cluster#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#coordinates Cluster#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#exclusions Cluster#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryPypi <a name="ClusterLibraryPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryPypi;

ClusterLibraryPypi.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#package Cluster#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-databricks.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterTimeouts;

ClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#create Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#update Cluster#update}.

---

### ClusterWorkloadType <a name="ClusterWorkloadType" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterWorkloadType;

ClusterWorkloadType.builder()
    .clients(ClusterWorkloadTypeClients)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients">clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | clients block. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients"></a>

```java
public ClusterWorkloadTypeClients getClients();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

clients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#clients Cluster#clients}

---

### ClusterWorkloadTypeClients <a name="ClusterWorkloadTypeClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterWorkloadTypeClients;

ClusterWorkloadTypeClients.builder()
//  .jobs(java.lang.Boolean)
//  .jobs(IResolvable)
//  .notebooks(java.lang.Boolean)
//  .notebooks(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs">jobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#jobs Cluster#jobs}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks">notebooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#notebooks Cluster#notebooks}. |

---

##### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs"></a>

```java
public java.lang.Object getJobs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#jobs Cluster#jobs}.

---

##### `notebooks`<sup>Optional</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks"></a>

```java
public java.lang.Object getNotebooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/cluster#notebooks Cluster#notebooks}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAutoscaleOutputReference <a name="ClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAutoscaleOutputReference;

new ClusterAutoscaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers">resetMinWorkers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```java
public void resetMaxWorkers()
```

##### `resetMinWorkers` <a name="resetMinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers"></a>

```java
public void resetMinWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput">minWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```java
public java.lang.Number getMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `minWorkersInput`<sup>Optional</sup> <a name="minWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```java
public java.lang.Number getMinWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `minWorkers`<sup>Required</sup> <a name="minWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue"></a>

```java
public ClusterAutoscale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---


### ClusterAwsAttributesOutputReference <a name="ClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAwsAttributesOutputReference;

new ClusterAwsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount">resetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeIops">resetEbsVolumeIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize">resetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeThroughput">resetEbsVolumeThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand">resetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent">resetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetEbsVolumeCount` <a name="resetEbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```java
public void resetEbsVolumeCount()
```

##### `resetEbsVolumeIops` <a name="resetEbsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeIops"></a>

```java
public void resetEbsVolumeIops()
```

##### `resetEbsVolumeSize` <a name="resetEbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```java
public void resetEbsVolumeSize()
```

##### `resetEbsVolumeThroughput` <a name="resetEbsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeThroughput"></a>

```java
public void resetEbsVolumeThroughput()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```

##### `resetFirstOnDemand` <a name="resetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```java
public void resetFirstOnDemand()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetSpotBidPricePercent` <a name="resetSpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```java
public void resetSpotBidPricePercent()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">ebsVolumeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput">ebsVolumeIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">ebsVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput">ebsVolumeThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput">firstOnDemandInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">spotBidPricePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount">ebsVolumeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIops">ebsVolumeIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughput">ebsVolumeThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `ebsVolumeCountInput`<sup>Optional</sup> <a name="ebsVolumeCountInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```java
public java.lang.Number getEbsVolumeCountInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeIopsInput`<sup>Optional</sup> <a name="ebsVolumeIopsInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput"></a>

```java
public java.lang.Number getEbsVolumeIopsInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeSizeInput`<sup>Optional</sup> <a name="ebsVolumeSizeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```java
public java.lang.Number getEbsVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeThroughputInput`<sup>Optional</sup> <a name="ebsVolumeThroughputInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput"></a>

```java
public java.lang.Number getEbsVolumeThroughputInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```java
public java.lang.String getEbsVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `firstOnDemandInput`<sup>Optional</sup> <a name="firstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```java
public java.lang.Number getFirstOnDemandInput();
```

- *Type:* java.lang.Number

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `spotBidPricePercentInput`<sup>Optional</sup> <a name="spotBidPricePercentInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```java
public java.lang.Number getSpotBidPricePercentInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `ebsVolumeCount`<sup>Required</sup> <a name="ebsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```java
public java.lang.Number getEbsVolumeCount();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeIops`<sup>Required</sup> <a name="ebsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIops"></a>

```java
public java.lang.Number getEbsVolumeIops();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeSize`<sup>Required</sup> <a name="ebsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```java
public java.lang.Number getEbsVolumeSize();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeThroughput`<sup>Required</sup> <a name="ebsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughput"></a>

```java
public java.lang.Number getEbsVolumeThroughput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

---

##### `firstOnDemand`<sup>Required</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `spotBidPricePercent`<sup>Required</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```java
public java.lang.Number getSpotBidPricePercent();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue"></a>

```java
public ClusterAwsAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---


### ClusterAzureAttributesLogAnalyticsInfoOutputReference <a name="ClusterAzureAttributesLogAnalyticsInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference;

new ClusterAzureAttributesLogAnalyticsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey">resetLogAnalyticsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogAnalyticsPrimaryKey` <a name="resetLogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey"></a>

```java
public void resetLogAnalyticsPrimaryKey()
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId"></a>

```java
public void resetLogAnalyticsWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput">logAnalyticsPrimaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey">logAnalyticsPrimaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalyticsPrimaryKeyInput`<sup>Optional</sup> <a name="logAnalyticsPrimaryKeyInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput"></a>

```java
public java.lang.String getLogAnalyticsPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsPrimaryKey`<sup>Required</sup> <a name="logAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey"></a>

```java
public java.lang.String getLogAnalyticsPrimaryKey();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue"></a>

```java
public ClusterAzureAttributesLogAnalyticsInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---


### ClusterAzureAttributesOutputReference <a name="ClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterAzureAttributesOutputReference;

new ClusterAzureAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo">putLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand">resetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetLogAnalyticsInfo">resetLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">resetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogAnalyticsInfo` <a name="putLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo"></a>

```java
public void putLogAnalyticsInfo(ClusterAzureAttributesLogAnalyticsInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetFirstOnDemand` <a name="resetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```java
public void resetFirstOnDemand()
```

##### `resetLogAnalyticsInfo` <a name="resetLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetLogAnalyticsInfo"></a>

```java
public void resetLogAnalyticsInfo()
```

##### `resetSpotBidMaxPrice` <a name="resetSpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```java
public void resetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfo">logAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference">ClusterAzureAttributesLogAnalyticsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput">firstOnDemandInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput">logAnalyticsInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">spotBidMaxPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalyticsInfo`<sup>Required</sup> <a name="logAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfo"></a>

```java
public ClusterAzureAttributesLogAnalyticsInfoOutputReference getLogAnalyticsInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference">ClusterAzureAttributesLogAnalyticsInfoOutputReference</a>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `firstOnDemandInput`<sup>Optional</sup> <a name="firstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```java
public java.lang.Number getFirstOnDemandInput();
```

- *Type:* java.lang.Number

---

##### `logAnalyticsInfoInput`<sup>Optional</sup> <a name="logAnalyticsInfoInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput"></a>

```java
public ClusterAzureAttributesLogAnalyticsInfo getLogAnalyticsInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `spotBidMaxPriceInput`<sup>Optional</sup> <a name="spotBidMaxPriceInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```java
public java.lang.Number getSpotBidMaxPriceInput();
```

- *Type:* java.lang.Number

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `firstOnDemand`<sup>Required</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

---

##### `spotBidMaxPrice`<sup>Required</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```java
public java.lang.Number getSpotBidMaxPrice();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue"></a>

```java
public ClusterAzureAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---


### ClusterCloneFromOutputReference <a name="ClusterCloneFromOutputReference" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterCloneFromOutputReference;

new ClusterCloneFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.sourceClusterIdInput">sourceClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.sourceClusterId">sourceClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceClusterIdInput`<sup>Optional</sup> <a name="sourceClusterIdInput" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.sourceClusterIdInput"></a>

```java
public java.lang.String getSourceClusterIdInput();
```

- *Type:* java.lang.String

---

##### `sourceClusterId`<sup>Required</sup> <a name="sourceClusterId" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.sourceClusterId"></a>

```java
public java.lang.String getSourceClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterCloneFromOutputReference.property.internalValue"></a>

```java
public ClusterCloneFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterCloneFrom">ClusterCloneFrom</a>

---


### ClusterClusterLogConfDbfsOutputReference <a name="ClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterLogConfDbfsOutputReference;

new ClusterClusterLogConfDbfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```java
public ClusterClusterLogConfDbfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---


### ClusterClusterLogConfOutputReference <a name="ClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterLogConfOutputReference;

new ClusterClusterLogConfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs">putDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs">resetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbfs` <a name="putDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs"></a>

```java
public void putDbfs(ClusterClusterLogConfDbfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3"></a>

```java
public void putS3(ClusterClusterLogConfS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `resetDbfs` <a name="resetDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs"></a>

```java
public void resetDbfs()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput">dbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs"></a>

```java
public ClusterClusterLogConfDbfsOutputReference getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3"></a>

```java
public ClusterClusterLogConfS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a>

---

##### `dbfsInput`<sup>Optional</sup> <a name="dbfsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```java
public ClusterClusterLogConfDbfs getDbfsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input"></a>

```java
public ClusterClusterLogConfS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue"></a>

```java
public ClusterClusterLogConf getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---


### ClusterClusterLogConfS3OutputReference <a name="ClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterLogConfS3OutputReference;

new ClusterClusterLogConfS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl">resetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption">resetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCannedAcl` <a name="resetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```java
public void resetCannedAcl()
```

##### `resetEnableEncryption` <a name="resetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```java
public void resetEnableEncryption()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput">cannedAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">enableEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cannedAclInput`<sup>Optional</sup> <a name="cannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```java
public java.lang.String getCannedAclInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `enableEncryptionInput`<sup>Optional</sup> <a name="enableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```java
public java.lang.Object getEnableEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cannedAcl`<sup>Required</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `enableEncryption`<sup>Required</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```java
public ClusterClusterLogConfS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---


### ClusterClusterMountInfoList <a name="ClusterClusterMountInfoList" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterMountInfoList;

new ClusterClusterMountInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get"></a>

```java
public ClusterClusterMountInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>>

---


### ClusterClusterMountInfoNetworkFilesystemInfoOutputReference <a name="ClusterClusterMountInfoNetworkFilesystemInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference;

new ClusterClusterMountInfoNetworkFilesystemInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress">serverAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput"></a>

```java
public java.lang.String getMountOptionsInput();
```

- *Type:* java.lang.String

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput"></a>

```java
public java.lang.String getServerAddressInput();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions"></a>

```java
public java.lang.String getMountOptions();
```

- *Type:* java.lang.String

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress"></a>

```java
public java.lang.String getServerAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue"></a>

```java
public ClusterClusterMountInfoNetworkFilesystemInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---


### ClusterClusterMountInfoOutputReference <a name="ClusterClusterMountInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterClusterMountInfoOutputReference;

new ClusterClusterMountInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo">putNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath">resetRemoteMountDirPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkFilesystemInfo` <a name="putNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo"></a>

```java
public void putNetworkFilesystemInfo(ClusterClusterMountInfoNetworkFilesystemInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `resetRemoteMountDirPath` <a name="resetRemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath"></a>

```java
public void resetRemoteMountDirPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo">networkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput">localMountDirPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput">networkFilesystemInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput">remoteMountDirPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath">localMountDirPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath">remoteMountDirPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkFilesystemInfo`<sup>Required</sup> <a name="networkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo"></a>

```java
public ClusterClusterMountInfoNetworkFilesystemInfoOutputReference getNetworkFilesystemInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a>

---

##### `localMountDirPathInput`<sup>Optional</sup> <a name="localMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput"></a>

```java
public java.lang.String getLocalMountDirPathInput();
```

- *Type:* java.lang.String

---

##### `networkFilesystemInfoInput`<sup>Optional</sup> <a name="networkFilesystemInfoInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput"></a>

```java
public ClusterClusterMountInfoNetworkFilesystemInfo getNetworkFilesystemInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `remoteMountDirPathInput`<sup>Optional</sup> <a name="remoteMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput"></a>

```java
public java.lang.String getRemoteMountDirPathInput();
```

- *Type:* java.lang.String

---

##### `localMountDirPath`<sup>Required</sup> <a name="localMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath"></a>

```java
public java.lang.String getLocalMountDirPath();
```

- *Type:* java.lang.String

---

##### `remoteMountDirPath`<sup>Required</sup> <a name="remoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath"></a>

```java
public java.lang.String getRemoteMountDirPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>

---


### ClusterDockerImageBasicAuthOutputReference <a name="ClusterDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterDockerImageBasicAuthOutputReference;

new ClusterDockerImageBasicAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue"></a>

```java
public ClusterDockerImageBasicAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---


### ClusterDockerImageOutputReference <a name="ClusterDockerImageOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterDockerImageOutputReference;

new ClusterDockerImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth"></a>

```java
public void putBasicAuth(ClusterDockerImageBasicAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth"></a>

```java
public void resetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth"></a>

```java
public ClusterDockerImageBasicAuthOutputReference getBasicAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput"></a>

```java
public ClusterDockerImageBasicAuth getBasicAuthInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue"></a>

```java
public ClusterDockerImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---


### ClusterGcpAttributesOutputReference <a name="ClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterGcpAttributesOutputReference;

new ClusterGcpAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize">resetBootDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors">resetUsePreemptibleExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetBootDiskSize` <a name="resetBootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize"></a>

```java
public void resetBootDiskSize()
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```java
public void resetGoogleServiceAccount()
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```java
public void resetLocalSsdCount()
```

##### `resetUsePreemptibleExecutors` <a name="resetUsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```java
public void resetUsePreemptibleExecutors()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput">bootDiskSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">usePreemptibleExecutorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize">bootDiskSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors">usePreemptibleExecutors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeInput`<sup>Optional</sup> <a name="bootDiskSizeInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```java
public java.lang.Number getBootDiskSizeInput();
```

- *Type:* java.lang.Number

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```java
public java.lang.String getGoogleServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `usePreemptibleExecutorsInput`<sup>Optional</sup> <a name="usePreemptibleExecutorsInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```java
public java.lang.Object getUsePreemptibleExecutorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `bootDiskSize`<sup>Required</sup> <a name="bootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize"></a>

```java
public java.lang.Number getBootDiskSize();
```

- *Type:* java.lang.Number

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `usePreemptibleExecutors`<sup>Required</sup> <a name="usePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```java
public java.lang.Object getUsePreemptibleExecutors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue"></a>

```java
public ClusterGcpAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---


### ClusterInitScriptsAbfssOutputReference <a name="ClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsAbfssOutputReference;

new ClusterInitScriptsAbfssOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsAbfss getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---


### ClusterInitScriptsDbfsOutputReference <a name="ClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsDbfsOutputReference;

new ClusterInitScriptsDbfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsDbfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---


### ClusterInitScriptsFileOutputReference <a name="ClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsFileOutputReference;

new ClusterInitScriptsFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---


### ClusterInitScriptsGcsOutputReference <a name="ClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsGcsOutputReference;

new ClusterInitScriptsGcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsGcs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---


### ClusterInitScriptsList <a name="ClusterInitScriptsList" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsList;

new ClusterInitScriptsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get"></a>

```java
public ClusterInitScriptsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>>

---


### ClusterInitScriptsOutputReference <a name="ClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsOutputReference;

new ClusterInitScriptsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss">putAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs">putDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace">putWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss">resetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs">resetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbfss` <a name="putAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss"></a>

```java
public void putAbfss(ClusterInitScriptsAbfss value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `putDbfs` <a name="putDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs"></a>

```java
public void putDbfs(ClusterInitScriptsDbfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `putFile` <a name="putFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile"></a>

```java
public void putFile(ClusterInitScriptsFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `putGcs` <a name="putGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs"></a>

```java
public void putGcs(ClusterInitScriptsGcs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3"></a>

```java
public void putS3(ClusterInitScriptsS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes"></a>

```java
public void putVolumes(ClusterInitScriptsVolumes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `putWorkspace` <a name="putWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace"></a>

```java
public void putWorkspace(ClusterInitScriptsWorkspace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `resetAbfss` <a name="resetAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss"></a>

```java
public void resetAbfss()
```

##### `resetDbfs` <a name="resetDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs"></a>

```java
public void resetDbfs()
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetGcs` <a name="resetGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs"></a>

```java
public void resetGcs()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3"></a>

```java
public void resetS3()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace"></a>

```java
public void resetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput">abfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput">dbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput">volumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput">workspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abfss`<sup>Required</sup> <a name="abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss"></a>

```java
public ClusterInitScriptsAbfssOutputReference getAbfss();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a>

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs"></a>

```java
public ClusterInitScriptsDbfsOutputReference getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file"></a>

```java
public ClusterInitScriptsFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs"></a>

```java
public ClusterInitScriptsGcsOutputReference getGcs();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3"></a>

```java
public ClusterInitScriptsS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes"></a>

```java
public ClusterInitScriptsVolumesOutputReference getVolumes();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a>

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace"></a>

```java
public ClusterInitScriptsWorkspaceOutputReference getWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a>

---

##### `abfssInput`<sup>Optional</sup> <a name="abfssInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput"></a>

```java
public ClusterInitScriptsAbfss getAbfssInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `dbfsInput`<sup>Optional</sup> <a name="dbfsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput"></a>

```java
public ClusterInitScriptsDbfs getDbfsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput"></a>

```java
public ClusterInitScriptsFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput"></a>

```java
public ClusterInitScriptsGcs getGcsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input"></a>

```java
public ClusterInitScriptsS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput"></a>

```java
public ClusterInitScriptsVolumes getVolumesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput"></a>

```java
public ClusterInitScriptsWorkspace getWorkspaceInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>

---


### ClusterInitScriptsS3OutputReference <a name="ClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsS3OutputReference;

new ClusterInitScriptsS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl">resetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption">resetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCannedAcl` <a name="resetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```java
public void resetCannedAcl()
```

##### `resetEnableEncryption` <a name="resetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```java
public void resetEnableEncryption()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput">cannedAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput">enableEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cannedAclInput`<sup>Optional</sup> <a name="cannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```java
public java.lang.String getCannedAclInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `enableEncryptionInput`<sup>Optional</sup> <a name="enableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```java
public java.lang.Object getEnableEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cannedAcl`<sup>Required</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `enableEncryption`<sup>Required</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---


### ClusterInitScriptsVolumesOutputReference <a name="ClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsVolumesOutputReference;

new ClusterInitScriptsVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---


### ClusterInitScriptsWorkspaceOutputReference <a name="ClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterInitScriptsWorkspaceOutputReference;

new ClusterInitScriptsWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```java
public ClusterInitScriptsWorkspace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---


### ClusterLibraryCranOutputReference <a name="ClusterLibraryCranOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryCranOutputReference;

new ClusterLibraryCranOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue"></a>

```java
public ClusterLibraryCran getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---


### ClusterLibraryList <a name="ClusterLibraryList" id="@cdktf/provider-databricks.cluster.ClusterLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryList;

new ClusterLibraryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get"></a>

```java
public ClusterLibraryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>>

---


### ClusterLibraryMavenOutputReference <a name="ClusterLibraryMavenOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryMavenOutputReference;

new ClusterLibraryMavenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput"></a>

```java
public java.lang.String getCoordinatesInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue"></a>

```java
public ClusterLibraryMaven getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---


### ClusterLibraryOutputReference <a name="ClusterLibraryOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryOutputReference;

new ClusterLibraryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetRequirements">resetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran"></a>

```java
public void putCran(ClusterLibraryCran value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven"></a>

```java
public void putMaven(ClusterLibraryMaven value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi"></a>

```java
public void putPypi(ClusterLibraryPypi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran"></a>

```java
public void resetCran()
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg"></a>

```java
public void resetEgg()
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar"></a>

```java
public void resetJar()
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven"></a>

```java
public void resetMaven()
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi"></a>

```java
public void resetPypi()
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetRequirements"></a>

```java
public void resetRequirements()
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl"></a>

```java
public void resetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput">cranInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput">eggInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput">mavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput">pypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.requirementsInput">requirementsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput">whlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg">egg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.requirements">requirements</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl">whl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran"></a>

```java
public ClusterLibraryCranOutputReference getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven"></a>

```java
public ClusterLibraryMavenOutputReference getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi"></a>

```java
public ClusterLibraryPypiOutputReference getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a>

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput"></a>

```java
public ClusterLibraryCran getCranInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput"></a>

```java
public java.lang.String getEggInput();
```

- *Type:* java.lang.String

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput"></a>

```java
public ClusterLibraryMaven getMavenInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput"></a>

```java
public ClusterLibraryPypi getPypiInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.requirementsInput"></a>

```java
public java.lang.String getRequirementsInput();
```

- *Type:* java.lang.String

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput"></a>

```java
public java.lang.String getWhlInput();
```

- *Type:* java.lang.String

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>

---


### ClusterLibraryPypiOutputReference <a name="ClusterLibraryPypiOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterLibraryPypiOutputReference;

new ClusterLibraryPypiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue"></a>

```java
public ClusterLibraryPypi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterTimeoutsOutputReference;

new ClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---


### ClusterWorkloadTypeClientsOutputReference <a name="ClusterWorkloadTypeClientsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterWorkloadTypeClientsOutputReference;

new ClusterWorkloadTypeClientsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs">resetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks">resetNotebooks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobs` <a name="resetJobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs"></a>

```java
public void resetJobs()
```

##### `resetNotebooks` <a name="resetNotebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks"></a>

```java
public void resetNotebooks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput">jobsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput">notebooksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs">jobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks">notebooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobsInput`<sup>Optional</sup> <a name="jobsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput"></a>

```java
public java.lang.Object getJobsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notebooksInput`<sup>Optional</sup> <a name="notebooksInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput"></a>

```java
public java.lang.Object getNotebooksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs"></a>

```java
public java.lang.Object getJobs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notebooks`<sup>Required</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks"></a>

```java
public java.lang.Object getNotebooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue"></a>

```java
public ClusterWorkloadTypeClients getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


### ClusterWorkloadTypeOutputReference <a name="ClusterWorkloadTypeOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.cluster.ClusterWorkloadTypeOutputReference;

new ClusterWorkloadTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients">putClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClients` <a name="putClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients"></a>

```java
public void putClients(ClusterWorkloadTypeClients value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients">clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput">clientsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients"></a>

```java
public ClusterWorkloadTypeClientsOutputReference getClients();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a>

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput"></a>

```java
public ClusterWorkloadTypeClients getClientsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue"></a>

```java
public ClusterWorkloadType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---



