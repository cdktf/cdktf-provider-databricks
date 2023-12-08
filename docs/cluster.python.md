# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-databricks.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-databricks.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.Cluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  spark_version: str,
  apply_policy_default_values: typing.Union[bool, IResolvable] = None,
  autoscale: ClusterAutoscale = None,
  autotermination_minutes: typing.Union[int, float] = None,
  aws_attributes: ClusterAwsAttributes = None,
  azure_attributes: ClusterAzureAttributes = None,
  cluster_id: str = None,
  cluster_log_conf: ClusterClusterLogConf = None,
  cluster_mount_info: typing.Union[IResolvable, typing.List[ClusterClusterMountInfo]] = None,
  cluster_name: str = None,
  custom_tags: typing.Mapping[str] = None,
  data_security_mode: str = None,
  docker_image: ClusterDockerImage = None,
  driver_instance_pool_id: str = None,
  driver_node_type_id: str = None,
  enable_elastic_disk: typing.Union[bool, IResolvable] = None,
  enable_local_disk_encryption: typing.Union[bool, IResolvable] = None,
  gcp_attributes: ClusterGcpAttributes = None,
  id: str = None,
  idempotency_token: str = None,
  init_scripts: typing.Union[IResolvable, typing.List[ClusterInitScripts]] = None,
  instance_pool_id: str = None,
  is_pinned: typing.Union[bool, IResolvable] = None,
  library: typing.Union[IResolvable, typing.List[ClusterLibrary]] = None,
  node_type_id: str = None,
  num_workers: typing.Union[int, float] = None,
  policy_id: str = None,
  runtime_engine: str = None,
  single_user_name: str = None,
  spark_conf: typing.Mapping[str] = None,
  spark_env_vars: typing.Mapping[str] = None,
  ssh_public_keys: typing.List[str] = None,
  timeouts: ClusterTimeouts = None,
  workload_type: ClusterWorkloadType = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.applyPolicyDefaultValues">apply_policy_default_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoterminationMinutes">autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_id Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterMountInfo">cluster_mount_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]</code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dataSecurityMode">data_security_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dockerImage">docker_image</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.idempotencyToken">idempotency_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.initScripts">init_scripts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.isPinned">is_pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.library">library</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.runtimeEngine">runtime_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.singleUserName">single_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.workloadType">workload_type</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `apply_policy_default_values`<sup>Optional</sup> <a name="apply_policy_default_values" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.applyPolicyDefaultValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `autotermination_minutes`<sup>Optional</sup> <a name="autotermination_minutes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.autoterminationMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.awsAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.azureAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_id Cluster#cluster_id}.

---

##### `cluster_log_conf`<sup>Optional</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterLogConf"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `cluster_mount_info`<sup>Optional</sup> <a name="cluster_mount_info" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterMountInfo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `data_security_mode`<sup>Optional</sup> <a name="data_security_mode" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dataSecurityMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `docker_image`<sup>Optional</sup> <a name="docker_image" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.dockerImage"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `driver_instance_pool_id`<sup>Optional</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverInstancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `driver_node_type_id`<sup>Optional</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.driverNodeTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `enable_elastic_disk`<sup>Optional</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableElasticDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `enable_local_disk_encryption`<sup>Optional</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.enableLocalDiskEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.gcpAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idempotency_token`<sup>Optional</sup> <a name="idempotency_token" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.idempotencyToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.initScripts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.instancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.isPinned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.library"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#library Cluster#library}

---

##### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.nodeTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.numWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `runtime_engine`<sup>Optional</sup> <a name="runtime_engine" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.runtimeEngine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `single_user_name`<sup>Optional</sup> <a name="single_user_name" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.singleUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `spark_conf`<sup>Optional</sup> <a name="spark_conf" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkConf"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `spark_env_vars`<sup>Optional</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sparkEnvVars"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `workload_type`<sup>Optional</sup> <a name="workload_type" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.workloadType"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#workload_type Cluster#workload_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes">put_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes">put_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf">put_cluster_log_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo">put_cluster_mount_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putDockerImage">put_docker_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes">put_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putInitScripts">put_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putLibrary">put_library</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putWorkloadType">put_workload_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues">reset_apply_policy_default_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes">reset_autotermination_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes">reset_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes">reset_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf">reset_cluster_log_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo">reset_cluster_mount_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode">reset_data_security_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDockerImage">reset_docker_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId">reset_driver_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId">reset_driver_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk">reset_enable_elastic_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption">reset_enable_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes">reset_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken">reset_idempotency_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInitScripts">reset_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId">reset_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIsPinned">reset_is_pinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetLibrary">reset_library</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId">reset_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers">reset_num_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine">reset_runtime_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName">reset_single_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkConf">reset_spark_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars">reset_spark_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType">reset_workload_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.Cluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.cluster.Cluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.cluster.Cluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.cluster.Cluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.cluster.Cluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.cluster.Cluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.cluster.Cluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.cluster.Cluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale"></a>

```python
def put_autoscale(
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None
) -> None
```

###### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale.parameter.maxWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#max_workers Cluster#max_workers}.

---

###### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale.parameter.minWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#min_workers Cluster#min_workers}.

---

##### `put_aws_attributes` <a name="put_aws_attributes" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes"></a>

```python
def put_aws_attributes(
  availability: str = None,
  ebs_volume_count: typing.Union[int, float] = None,
  ebs_volume_size: typing.Union[int, float] = None,
  ebs_volume_type: str = None,
  first_on_demand: typing.Union[int, float] = None,
  instance_profile_arn: str = None,
  spot_bid_price_percent: typing.Union[int, float] = None,
  zone_id: str = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}.

---

###### `ebs_volume_count`<sup>Optional</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.ebsVolumeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}.

---

###### `ebs_volume_size`<sup>Optional</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.ebsVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}.

---

###### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.ebsVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}.

---

###### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.firstOnDemand"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

###### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}.

---

###### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.spotBidPricePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#zone_id Cluster#zone_id}.

---

##### `put_azure_attributes` <a name="put_azure_attributes" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes"></a>

```python
def put_azure_attributes(
  availability: str = None,
  first_on_demand: typing.Union[int, float] = None,
  spot_bid_max_price: typing.Union[int, float] = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}.

---

###### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.firstOnDemand"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

###### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.spotBidMaxPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}.

---

##### `put_cluster_log_conf` <a name="put_cluster_log_conf" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf"></a>

```python
def put_cluster_log_conf(
  dbfs: ClusterClusterLogConfDbfs = None,
  s3: ClusterClusterLogConfS3 = None
) -> None
```

###### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf.parameter.dbfs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#dbfs Cluster#dbfs}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#s3 Cluster#s3}

---

##### `put_cluster_mount_info` <a name="put_cluster_mount_info" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo"></a>

```python
def put_cluster_mount_info(
  value: typing.Union[IResolvable, typing.List[ClusterClusterMountInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]

---

##### `put_docker_image` <a name="put_docker_image" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage"></a>

```python
def put_docker_image(
  url: str,
  basic_auth: ClusterDockerImageBasicAuth = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#url Cluster#url}.

---

###### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage.parameter.basicAuth"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#basic_auth Cluster#basic_auth}

---

##### `put_gcp_attributes` <a name="put_gcp_attributes" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes"></a>

```python
def put_gcp_attributes(
  availability: str = None,
  boot_disk_size: typing.Union[int, float] = None,
  google_service_account: str = None,
  local_ssd_count: typing.Union[int, float] = None,
  use_preemptible_executors: typing.Union[bool, IResolvable] = None,
  zone_id: str = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}.

---

###### `boot_disk_size`<sup>Optional</sup> <a name="boot_disk_size" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.bootDiskSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}.

---

###### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.googleServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#google_service_account Cluster#google_service_account}.

---

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}.

---

###### `use_preemptible_executors`<sup>Optional</sup> <a name="use_preemptible_executors" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.usePreemptibleExecutors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#zone_id Cluster#zone_id}.

---

##### `put_init_scripts` <a name="put_init_scripts" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts"></a>

```python
def put_init_scripts(
  value: typing.Union[IResolvable, typing.List[ClusterInitScripts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]

---

##### `put_library` <a name="put_library" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary"></a>

```python
def put_library(
  value: typing.Union[IResolvable, typing.List[ClusterLibrary]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#create Cluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#delete Cluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#update Cluster#update}.

---

##### `put_workload_type` <a name="put_workload_type" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType"></a>

```python
def put_workload_type(
  clients: ClusterWorkloadTypeClients
) -> None
```

###### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType.parameter.clients"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

clients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#clients Cluster#clients}

---

##### `reset_apply_policy_default_values` <a name="reset_apply_policy_default_values" id="@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues"></a>

```python
def reset_apply_policy_default_values() -> None
```

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_autotermination_minutes` <a name="reset_autotermination_minutes" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes"></a>

```python
def reset_autotermination_minutes() -> None
```

##### `reset_aws_attributes` <a name="reset_aws_attributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes"></a>

```python
def reset_aws_attributes() -> None
```

##### `reset_azure_attributes` <a name="reset_azure_attributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes"></a>

```python
def reset_azure_attributes() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_cluster_log_conf` <a name="reset_cluster_log_conf" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf"></a>

```python
def reset_cluster_log_conf() -> None
```

##### `reset_cluster_mount_info` <a name="reset_cluster_mount_info" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo"></a>

```python
def reset_cluster_mount_info() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.cluster.Cluster.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_data_security_mode` <a name="reset_data_security_mode" id="@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode"></a>

```python
def reset_data_security_mode() -> None
```

##### `reset_docker_image` <a name="reset_docker_image" id="@cdktf/provider-databricks.cluster.Cluster.resetDockerImage"></a>

```python
def reset_docker_image() -> None
```

##### `reset_driver_instance_pool_id` <a name="reset_driver_instance_pool_id" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId"></a>

```python
def reset_driver_instance_pool_id() -> None
```

##### `reset_driver_node_type_id` <a name="reset_driver_node_type_id" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId"></a>

```python
def reset_driver_node_type_id() -> None
```

##### `reset_enable_elastic_disk` <a name="reset_enable_elastic_disk" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk"></a>

```python
def reset_enable_elastic_disk() -> None
```

##### `reset_enable_local_disk_encryption` <a name="reset_enable_local_disk_encryption" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption"></a>

```python
def reset_enable_local_disk_encryption() -> None
```

##### `reset_gcp_attributes` <a name="reset_gcp_attributes" id="@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes"></a>

```python
def reset_gcp_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.cluster.Cluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idempotency_token` <a name="reset_idempotency_token" id="@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken"></a>

```python
def reset_idempotency_token() -> None
```

##### `reset_init_scripts` <a name="reset_init_scripts" id="@cdktf/provider-databricks.cluster.Cluster.resetInitScripts"></a>

```python
def reset_init_scripts() -> None
```

##### `reset_instance_pool_id` <a name="reset_instance_pool_id" id="@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId"></a>

```python
def reset_instance_pool_id() -> None
```

##### `reset_is_pinned` <a name="reset_is_pinned" id="@cdktf/provider-databricks.cluster.Cluster.resetIsPinned"></a>

```python
def reset_is_pinned() -> None
```

##### `reset_library` <a name="reset_library" id="@cdktf/provider-databricks.cluster.Cluster.resetLibrary"></a>

```python
def reset_library() -> None
```

##### `reset_node_type_id` <a name="reset_node_type_id" id="@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId"></a>

```python
def reset_node_type_id() -> None
```

##### `reset_num_workers` <a name="reset_num_workers" id="@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers"></a>

```python
def reset_num_workers() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.cluster.Cluster.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_runtime_engine` <a name="reset_runtime_engine" id="@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine"></a>

```python
def reset_runtime_engine() -> None
```

##### `reset_single_user_name` <a name="reset_single_user_name" id="@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName"></a>

```python
def reset_single_user_name() -> None
```

##### `reset_spark_conf` <a name="reset_spark_conf" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkConf"></a>

```python
def reset_spark_conf() -> None
```

##### `reset_spark_env_vars` <a name="reset_spark_env_vars" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars"></a>

```python
def reset_spark_env_vars() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.cluster.Cluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workload_type` <a name="reset_workload_type" id="@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType"></a>

```python
def reset_workload_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.Cluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.Cluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.Cluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.Cluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Cluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo">cluster_mount_info</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.defaultTags">default_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImage">docker_image</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScripts">init_scripts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.library">library</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadType">workload_type</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput">apply_policy_default_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput">autotermination_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput">aws_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput">azure_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput">cluster_log_conf_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput">cluster_mount_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput">data_security_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput">docker_image_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput">driver_instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput">driver_node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput">enable_elastic_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput">enable_local_disk_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput">gcp_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput">idempotency_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput">init_scripts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput">is_pinned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.libraryInput">library_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput">num_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput">runtime_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput">single_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput">spark_conf_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput">spark_env_vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput">spark_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput">workload_type_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues">apply_policy_default_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes">autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode">data_security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken">idempotency_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinned">is_pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine">runtime_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserName">single_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion">spark_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.cluster.Cluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.Cluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.Cluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.Cluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.cluster.Cluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.cluster.Cluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.Cluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscale"></a>

```python
autoscale: ClusterAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a>

---

##### `aws_attributes`<sup>Required</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes"></a>

```python
aws_attributes: ClusterAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a>

---

##### `azure_attributes`<sup>Required</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes"></a>

```python
azure_attributes: ClusterAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a>

---

##### `cluster_log_conf`<sup>Required</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf"></a>

```python
cluster_log_conf: ClusterClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a>

---

##### `cluster_mount_info`<sup>Required</sup> <a name="cluster_mount_info" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo"></a>

```python
cluster_mount_info: ClusterClusterMountInfoList
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a>

---

##### `default_tags`<sup>Required</sup> <a name="default_tags" id="@cdktf/provider-databricks.cluster.Cluster.property.defaultTags"></a>

```python
default_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `docker_image`<sup>Required</sup> <a name="docker_image" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImage"></a>

```python
docker_image: ClusterDockerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a>

---

##### `gcp_attributes`<sup>Required</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes"></a>

```python
gcp_attributes: ClusterGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a>

---

##### `init_scripts`<sup>Required</sup> <a name="init_scripts" id="@cdktf/provider-databricks.cluster.Cluster.property.initScripts"></a>

```python
init_scripts: ClusterInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a>

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-databricks.cluster.Cluster.property.library"></a>

```python
library: ClusterLibraryList
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.cluster.Cluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.Cluster.property.timeouts"></a>

```python
timeouts: ClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.Cluster.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadType"></a>

```python
workload_type: ClusterWorkloadTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a>

---

##### `apply_policy_default_values_input`<sup>Optional</sup> <a name="apply_policy_default_values_input" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput"></a>

```python
apply_policy_default_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput"></a>

```python
autoscale_input: ClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `autotermination_minutes_input`<sup>Optional</sup> <a name="autotermination_minutes_input" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput"></a>

```python
autotermination_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_attributes_input`<sup>Optional</sup> <a name="aws_attributes_input" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput"></a>

```python
aws_attributes_input: ClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `azure_attributes_input`<sup>Optional</sup> <a name="azure_attributes_input" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput"></a>

```python
azure_attributes_input: ClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_log_conf_input`<sup>Optional</sup> <a name="cluster_log_conf_input" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput"></a>

```python
cluster_log_conf_input: ClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `cluster_mount_info_input`<sup>Optional</sup> <a name="cluster_mount_info_input" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput"></a>

```python
cluster_mount_info_input: typing.Union[IResolvable, typing.List[ClusterClusterMountInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_security_mode_input`<sup>Optional</sup> <a name="data_security_mode_input" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput"></a>

```python
data_security_mode_input: str
```

- *Type:* str

---

##### `docker_image_input`<sup>Optional</sup> <a name="docker_image_input" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput"></a>

```python
docker_image_input: ClusterDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `driver_instance_pool_id_input`<sup>Optional</sup> <a name="driver_instance_pool_id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput"></a>

```python
driver_instance_pool_id_input: str
```

- *Type:* str

---

##### `driver_node_type_id_input`<sup>Optional</sup> <a name="driver_node_type_id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput"></a>

```python
driver_node_type_id_input: str
```

- *Type:* str

---

##### `enable_elastic_disk_input`<sup>Optional</sup> <a name="enable_elastic_disk_input" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput"></a>

```python
enable_elastic_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_local_disk_encryption_input`<sup>Optional</sup> <a name="enable_local_disk_encryption_input" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput"></a>

```python
enable_local_disk_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_attributes_input`<sup>Optional</sup> <a name="gcp_attributes_input" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput"></a>

```python
gcp_attributes_input: ClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `idempotency_token_input`<sup>Optional</sup> <a name="idempotency_token_input" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput"></a>

```python
idempotency_token_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `init_scripts_input`<sup>Optional</sup> <a name="init_scripts_input" id="@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput"></a>

```python
init_scripts_input: typing.Union[IResolvable, typing.List[ClusterInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `is_pinned_input`<sup>Optional</sup> <a name="is_pinned_input" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput"></a>

```python
is_pinned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `library_input`<sup>Optional</sup> <a name="library_input" id="@cdktf/provider-databricks.cluster.Cluster.property.libraryInput"></a>

```python
library_input: typing.Union[IResolvable, typing.List[ClusterLibrary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `num_workers_input`<sup>Optional</sup> <a name="num_workers_input" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput"></a>

```python
num_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `runtime_engine_input`<sup>Optional</sup> <a name="runtime_engine_input" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput"></a>

```python
runtime_engine_input: str
```

- *Type:* str

---

##### `single_user_name_input`<sup>Optional</sup> <a name="single_user_name_input" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput"></a>

```python
single_user_name_input: str
```

- *Type:* str

---

##### `spark_conf_input`<sup>Optional</sup> <a name="spark_conf_input" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput"></a>

```python
spark_conf_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_env_vars_input`<sup>Optional</sup> <a name="spark_env_vars_input" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput"></a>

```python
spark_env_vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_version_input`<sup>Optional</sup> <a name="spark_version_input" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput"></a>

```python
spark_version_input: str
```

- *Type:* str

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>]

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput"></a>

```python
workload_type_input: ClusterWorkloadType
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `apply_policy_default_values`<sup>Required</sup> <a name="apply_policy_default_values" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues"></a>

```python
apply_policy_default_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autotermination_minutes`<sup>Required</sup> <a name="autotermination_minutes" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes"></a>

```python
autotermination_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.cluster.Cluster.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_security_mode`<sup>Required</sup> <a name="data_security_mode" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode"></a>

```python
data_security_mode: str
```

- *Type:* str

---

##### `driver_instance_pool_id`<sup>Required</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId"></a>

```python
driver_instance_pool_id: str
```

- *Type:* str

---

##### `driver_node_type_id`<sup>Required</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId"></a>

```python
driver_node_type_id: str
```

- *Type:* str

---

##### `enable_elastic_disk`<sup>Required</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk"></a>

```python
enable_elastic_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_local_disk_encryption`<sup>Required</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption"></a>

```python
enable_local_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idempotency_token`<sup>Required</sup> <a name="idempotency_token" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken"></a>

```python
idempotency_token: str
```

- *Type:* str

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `is_pinned`<sup>Required</sup> <a name="is_pinned" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinned"></a>

```python
is_pinned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `num_workers`<sup>Required</sup> <a name="num_workers" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.cluster.Cluster.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `runtime_engine`<sup>Required</sup> <a name="runtime_engine" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine"></a>

```python
runtime_engine: str
```

- *Type:* str

---

##### `single_user_name`<sup>Required</sup> <a name="single_user_name" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserName"></a>

```python
single_user_name: str
```

- *Type:* str

---

##### `spark_conf`<sup>Required</sup> <a name="spark_conf" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConf"></a>

```python
spark_conf: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_env_vars`<sup>Required</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars"></a>

```python
spark_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAutoscale <a name="ClusterAutoscale" id="@cdktf/provider-databricks.cluster.ClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterAutoscale(
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#max_workers Cluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#min_workers Cluster#min_workers}. |

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#max_workers Cluster#max_workers}.

---

##### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#min_workers Cluster#min_workers}.

---

### ClusterAwsAttributes <a name="ClusterAwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterAwsAttributes(
  availability: str = None,
  ebs_volume_count: typing.Union[int, float] = None,
  ebs_volume_size: typing.Union[int, float] = None,
  ebs_volume_type: str = None,
  first_on_demand: typing.Union[int, float] = None,
  instance_profile_arn: str = None,
  spot_bid_price_percent: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount">ebs_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize">ebs_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}.

---

##### `ebs_volume_count`<sup>Optional</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount"></a>

```python
ebs_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}.

---

##### `ebs_volume_size`<sup>Optional</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize"></a>

```python
ebs_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}.

---

##### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}.

---

##### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}.

---

##### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterAzureAttributes <a name="ClusterAzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterAzureAttributes(
  availability: str = None,
  first_on_demand: typing.Union[int, float] = None,
  spot_bid_max_price: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}.

---

##### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}.

---

### ClusterClusterLogConf <a name="ClusterClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterLogConf(
  dbfs: ClusterClusterLogConfDbfs = None,
  s3: ClusterClusterLogConfS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs"></a>

```python
dbfs: ClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3"></a>

```python
s3: ClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#s3 Cluster#s3}

---

### ClusterClusterLogConfDbfs <a name="ClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterLogConfDbfs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterClusterLogConfS3 <a name="ClusterClusterLogConfS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterLogConfS3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl">canned_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#region Cluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#region Cluster#region}.

---

### ClusterClusterMountInfo <a name="ClusterClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterMountInfo(
  local_mount_dir_path: str,
  network_filesystem_info: ClusterClusterMountInfoNetworkFilesystemInfo,
  remote_mount_dir_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath">local_mount_dir_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo">network_filesystem_info</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | network_filesystem_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath">remote_mount_dir_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}. |

---

##### `local_mount_dir_path`<sup>Required</sup> <a name="local_mount_dir_path" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath"></a>

```python
local_mount_dir_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}.

---

##### `network_filesystem_info`<sup>Required</sup> <a name="network_filesystem_info" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo"></a>

```python
network_filesystem_info: ClusterClusterMountInfoNetworkFilesystemInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

network_filesystem_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#network_filesystem_info Cluster#network_filesystem_info}

---

##### `remote_mount_dir_path`<sup>Optional</sup> <a name="remote_mount_dir_path" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath"></a>

```python
remote_mount_dir_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}.

---

### ClusterClusterMountInfoNetworkFilesystemInfo <a name="ClusterClusterMountInfoNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterMountInfoNetworkFilesystemInfo(
  server_address: str,
  mount_options: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress">server_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#server_address Cluster#server_address}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions">mount_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#mount_options Cluster#mount_options}. |

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#server_address Cluster#server_address}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#mount_options Cluster#mount_options}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-databricks.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  spark_version: str,
  apply_policy_default_values: typing.Union[bool, IResolvable] = None,
  autoscale: ClusterAutoscale = None,
  autotermination_minutes: typing.Union[int, float] = None,
  aws_attributes: ClusterAwsAttributes = None,
  azure_attributes: ClusterAzureAttributes = None,
  cluster_id: str = None,
  cluster_log_conf: ClusterClusterLogConf = None,
  cluster_mount_info: typing.Union[IResolvable, typing.List[ClusterClusterMountInfo]] = None,
  cluster_name: str = None,
  custom_tags: typing.Mapping[str] = None,
  data_security_mode: str = None,
  docker_image: ClusterDockerImage = None,
  driver_instance_pool_id: str = None,
  driver_node_type_id: str = None,
  enable_elastic_disk: typing.Union[bool, IResolvable] = None,
  enable_local_disk_encryption: typing.Union[bool, IResolvable] = None,
  gcp_attributes: ClusterGcpAttributes = None,
  id: str = None,
  idempotency_token: str = None,
  init_scripts: typing.Union[IResolvable, typing.List[ClusterInitScripts]] = None,
  instance_pool_id: str = None,
  is_pinned: typing.Union[bool, IResolvable] = None,
  library: typing.Union[IResolvable, typing.List[ClusterLibrary]] = None,
  node_type_id: str = None,
  num_workers: typing.Union[int, float] = None,
  policy_id: str = None,
  runtime_engine: str = None,
  single_user_name: str = None,
  spark_conf: typing.Mapping[str] = None,
  spark_env_vars: typing.Mapping[str] = None,
  ssh_public_keys: typing.List[str] = None,
  timeouts: ClusterTimeouts = None,
  workload_type: ClusterWorkloadType = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues">apply_policy_default_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes">autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_id Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo">cluster_mount_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]</code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode">data_security_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage">docker_image</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken">idempotency_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts">init_scripts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned">is_pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.library">library</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine">runtime_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName">single_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType">workload_type</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `apply_policy_default_values`<sup>Optional</sup> <a name="apply_policy_default_values" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues"></a>

```python
apply_policy_default_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale"></a>

```python
autoscale: ClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `autotermination_minutes`<sup>Optional</sup> <a name="autotermination_minutes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes"></a>

```python
autotermination_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes"></a>

```python
aws_attributes: ClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes"></a>

```python
azure_attributes: ClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_id Cluster#cluster_id}.

---

##### `cluster_log_conf`<sup>Optional</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf"></a>

```python
cluster_log_conf: ClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `cluster_mount_info`<sup>Optional</sup> <a name="cluster_mount_info" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo"></a>

```python
cluster_mount_info: typing.Union[IResolvable, typing.List[ClusterClusterMountInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `data_security_mode`<sup>Optional</sup> <a name="data_security_mode" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode"></a>

```python
data_security_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `docker_image`<sup>Optional</sup> <a name="docker_image" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage"></a>

```python
docker_image: ClusterDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `driver_instance_pool_id`<sup>Optional</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId"></a>

```python
driver_instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `driver_node_type_id`<sup>Optional</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId"></a>

```python
driver_node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `enable_elastic_disk`<sup>Optional</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk"></a>

```python
enable_elastic_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `enable_local_disk_encryption`<sup>Optional</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption"></a>

```python
enable_local_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes"></a>

```python
gcp_attributes: ClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idempotency_token`<sup>Optional</sup> <a name="idempotency_token" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken"></a>

```python
idempotency_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts"></a>

```python
init_scripts: typing.Union[IResolvable, typing.List[ClusterInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned"></a>

```python
is_pinned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.library"></a>

```python
library: typing.Union[IResolvable, typing.List[ClusterLibrary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#library Cluster#library}

---

##### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `runtime_engine`<sup>Optional</sup> <a name="runtime_engine" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine"></a>

```python
runtime_engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `single_user_name`<sup>Optional</sup> <a name="single_user_name" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName"></a>

```python
single_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `spark_conf`<sup>Optional</sup> <a name="spark_conf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf"></a>

```python
spark_conf: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `spark_env_vars`<sup>Optional</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars"></a>

```python
spark_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts"></a>

```python
timeouts: ClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `workload_type`<sup>Optional</sup> <a name="workload_type" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType"></a>

```python
workload_type: ClusterWorkloadType
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#workload_type Cluster#workload_type}

---

### ClusterDockerImage <a name="ClusterDockerImage" id="@cdktf/provider-databricks.cluster.ClusterDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterDockerImage(
  url: str,
  basic_auth: ClusterDockerImageBasicAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#url Cluster#url}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#url Cluster#url}.

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth"></a>

```python
basic_auth: ClusterDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#basic_auth Cluster#basic_auth}

---

### ClusterDockerImageBasicAuth <a name="ClusterDockerImageBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterDockerImageBasicAuth(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#password Cluster#password}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#username Cluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#password Cluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#username Cluster#username}.

---

### ClusterGcpAttributes <a name="ClusterGcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterGcpAttributes(
  availability: str = None,
  boot_disk_size: typing.Union[int, float] = None,
  google_service_account: str = None,
  local_ssd_count: typing.Union[int, float] = None,
  use_preemptible_executors: typing.Union[bool, IResolvable] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize">boot_disk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#google_service_account Cluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors">use_preemptible_executors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#availability Cluster#availability}.

---

##### `boot_disk_size`<sup>Optional</sup> <a name="boot_disk_size" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize"></a>

```python
boot_disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}.

---

##### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#google_service_account Cluster#google_service_account}.

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}.

---

##### `use_preemptible_executors`<sup>Optional</sup> <a name="use_preemptible_executors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors"></a>

```python
use_preemptible_executors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterInitScripts <a name="ClusterInitScripts" id="@cdktf/provider-databricks.cluster.ClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScripts(
  abfss: ClusterInitScriptsAbfss = None,
  dbfs: ClusterInitScriptsDbfs = None,
  file: ClusterInitScriptsFile = None,
  gcs: ClusterInitScriptsGcs = None,
  s3: ClusterInitScriptsS3 = None,
  volumes: ClusterInitScriptsVolumes = None,
  workspace: ClusterInitScriptsWorkspace = None
)
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

```python
abfss: ClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#abfss Cluster#abfss}

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs"></a>

```python
dbfs: ClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file"></a>

```python
file: ClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#file Cluster#file}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs"></a>

```python
gcs: ClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#gcs Cluster#gcs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3"></a>

```python
s3: ClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#s3 Cluster#s3}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes"></a>

```python
volumes: ClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#volumes Cluster#volumes}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace"></a>

```python
workspace: ClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#workspace Cluster#workspace}

---

### ClusterInitScriptsAbfss <a name="ClusterInitScriptsAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsAbfss(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsDbfs <a name="ClusterInitScriptsDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsDbfs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsFile <a name="ClusterInitScriptsFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsFile(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsGcs <a name="ClusterInitScriptsGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsGcs(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsS3 <a name="ClusterInitScriptsS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsS3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl">canned_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#region Cluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#region Cluster#region}.

---

### ClusterInitScriptsVolumes <a name="ClusterInitScriptsVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsVolumes(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsWorkspace <a name="ClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsWorkspace(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterLibrary <a name="ClusterLibrary" id="@cdktf/provider-databricks.cluster.ClusterLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibrary.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibrary(
  cran: ClusterLibraryCran = None,
  egg: str = None,
  jar: str = None,
  maven: ClusterLibraryMaven = None,
  pypi: ClusterLibraryPypi = None,
  whl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg">egg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#egg Cluster#egg}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar">jar</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#jar Cluster#jar}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl">whl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#whl Cluster#whl}. |

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran"></a>

```python
cran: ClusterLibraryCran
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#cran Cluster#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg"></a>

```python
egg: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#egg Cluster#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar"></a>

```python
jar: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#jar Cluster#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven"></a>

```python
maven: ClusterLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#maven Cluster#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi"></a>

```python
pypi: ClusterLibraryPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#pypi Cluster#pypi}

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl"></a>

```python
whl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#whl Cluster#whl}.

---

### ClusterLibraryCran <a name="ClusterLibraryCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryCran(
  package: str,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package">package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package"></a>

```python
package: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#package Cluster#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryMaven <a name="ClusterLibraryMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryMaven(
  coordinates: str,
  exclusions: typing.List[str] = None,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates">coordinates</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#coordinates Cluster#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#exclusions Cluster#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates"></a>

```python
coordinates: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#coordinates Cluster#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#exclusions Cluster#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryPypi <a name="ClusterLibraryPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryPypi(
  package: str,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package">package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package"></a>

```python
package: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#package Cluster#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-databricks.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#create Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#update Cluster#update}.

---

### ClusterWorkloadType <a name="ClusterWorkloadType" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterWorkloadType(
  clients: ClusterWorkloadTypeClients
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients">clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | clients block. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients"></a>

```python
clients: ClusterWorkloadTypeClients
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

clients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#clients Cluster#clients}

---

### ClusterWorkloadTypeClients <a name="ClusterWorkloadTypeClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterWorkloadTypeClients(
  jobs: typing.Union[bool, IResolvable] = None,
  notebooks: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs">jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#jobs Cluster#jobs}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks">notebooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#notebooks Cluster#notebooks}. |

---

##### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs"></a>

```python
jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#jobs Cluster#jobs}.

---

##### `notebooks`<sup>Optional</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks"></a>

```python
notebooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#notebooks Cluster#notebooks}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAutoscaleOutputReference <a name="ClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers">reset_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers">reset_min_workers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_workers` <a name="reset_max_workers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```python
def reset_max_workers() -> None
```

##### `reset_min_workers` <a name="reset_min_workers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers"></a>

```python
def reset_min_workers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput">max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput">min_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_workers_input`<sup>Optional</sup> <a name="max_workers_input" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```python
max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers_input`<sup>Optional</sup> <a name="min_workers_input" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```python
min_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers`<sup>Required</sup> <a name="min_workers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: ClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---


### ClusterAwsAttributesOutputReference <a name="ClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterAwsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount">reset_ebs_volume_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize">reset_ebs_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType">reset_ebs_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand">reset_first_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent">reset_spot_bid_price_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_ebs_volume_count` <a name="reset_ebs_volume_count" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```python
def reset_ebs_volume_count() -> None
```

##### `reset_ebs_volume_size` <a name="reset_ebs_volume_size" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```python
def reset_ebs_volume_size() -> None
```

##### `reset_ebs_volume_type` <a name="reset_ebs_volume_type" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```python
def reset_ebs_volume_type() -> None
```

##### `reset_first_on_demand` <a name="reset_first_on_demand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```python
def reset_first_on_demand() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_spot_bid_price_percent` <a name="reset_spot_bid_price_percent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```python
def reset_spot_bid_price_percent() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">ebs_volume_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">ebs_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">ebs_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput">first_on_demand_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">spot_bid_price_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount">ebs_volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize">ebs_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `ebs_volume_count_input`<sup>Optional</sup> <a name="ebs_volume_count_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```python
ebs_volume_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_size_input`<sup>Optional</sup> <a name="ebs_volume_size_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```python
ebs_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type_input`<sup>Optional</sup> <a name="ebs_volume_type_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```python
ebs_volume_type_input: str
```

- *Type:* str

---

##### `first_on_demand_input`<sup>Optional</sup> <a name="first_on_demand_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```python
first_on_demand_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `spot_bid_price_percent_input`<sup>Optional</sup> <a name="spot_bid_price_percent_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```python
spot_bid_price_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `ebs_volume_count`<sup>Required</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```python
ebs_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_size`<sup>Required</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```python
ebs_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `first_on_demand`<sup>Required</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `spot_bid_price_percent`<sup>Required</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: ClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---


### ClusterAzureAttributesOutputReference <a name="ClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterAzureAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand">reset_first_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">reset_spot_bid_max_price</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_first_on_demand` <a name="reset_first_on_demand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```python
def reset_first_on_demand() -> None
```

##### `reset_spot_bid_max_price` <a name="reset_spot_bid_max_price" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```python
def reset_spot_bid_max_price() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput">first_on_demand_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">spot_bid_max_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `first_on_demand_input`<sup>Optional</sup> <a name="first_on_demand_input" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```python
first_on_demand_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_bid_max_price_input`<sup>Optional</sup> <a name="spot_bid_max_price_input" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```python
spot_bid_max_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `first_on_demand`<sup>Required</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_bid_max_price`<sup>Required</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue"></a>

```python
internal_value: ClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---


### ClusterClusterLogConfDbfsOutputReference <a name="ClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterLogConfDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```python
internal_value: ClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---


### ClusterClusterLogConfOutputReference <a name="ClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterLogConfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs">put_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs">reset_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dbfs` <a name="put_dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs"></a>

```python
def put_dbfs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3"></a>

```python
def put_s3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

###### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.cannedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

###### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.enableEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#endpoint Cluster#endpoint}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#kms_key Cluster#kms_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#region Cluster#region}.

---

##### `reset_dbfs` <a name="reset_dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs"></a>

```python
def reset_dbfs() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput">dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs"></a>

```python
dbfs: ClusterClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3"></a>

```python
s3: ClusterClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a>

---

##### `dbfs_input`<sup>Optional</sup> <a name="dbfs_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```python
dbfs_input: ClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input"></a>

```python
s3_input: ClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue"></a>

```python
internal_value: ClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---


### ClusterClusterLogConfS3OutputReference <a name="ClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterLogConfS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl">reset_canned_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption">reset_enable_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canned_acl` <a name="reset_canned_acl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```python
def reset_canned_acl() -> None
```

##### `reset_enable_encryption` <a name="reset_enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```python
def reset_enable_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput">canned_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">enable_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl">canned_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canned_acl_input`<sup>Optional</sup> <a name="canned_acl_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```python
canned_acl_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enable_encryption_input`<sup>Optional</sup> <a name="enable_encryption_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```python
enable_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `canned_acl`<sup>Required</sup> <a name="canned_acl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enable_encryption`<sup>Required</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```python
internal_value: ClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---


### ClusterClusterMountInfoList <a name="ClusterClusterMountInfoList" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterMountInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterClusterMountInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterClusterMountInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]]

---


### ClusterClusterMountInfoNetworkFilesystemInfoOutputReference <a name="ClusterClusterMountInfoNetworkFilesystemInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput">server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress">server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: str
```

- *Type:* str

---

##### `server_address_input`<sup>Optional</sup> <a name="server_address_input" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput"></a>

```python
server_address_input: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue"></a>

```python
internal_value: ClusterClusterMountInfoNetworkFilesystemInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---


### ClusterClusterMountInfoOutputReference <a name="ClusterClusterMountInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterClusterMountInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo">put_network_filesystem_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath">reset_remote_mount_dir_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_filesystem_info` <a name="put_network_filesystem_info" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo"></a>

```python
def put_network_filesystem_info(
  server_address: str,
  mount_options: str = None
) -> None
```

###### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo.parameter.serverAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#server_address Cluster#server_address}.

---

###### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo.parameter.mountOptions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#mount_options Cluster#mount_options}.

---

##### `reset_remote_mount_dir_path` <a name="reset_remote_mount_dir_path" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath"></a>

```python
def reset_remote_mount_dir_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo">network_filesystem_info</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput">local_mount_dir_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput">network_filesystem_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput">remote_mount_dir_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath">local_mount_dir_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath">remote_mount_dir_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_filesystem_info`<sup>Required</sup> <a name="network_filesystem_info" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo"></a>

```python
network_filesystem_info: ClusterClusterMountInfoNetworkFilesystemInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a>

---

##### `local_mount_dir_path_input`<sup>Optional</sup> <a name="local_mount_dir_path_input" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput"></a>

```python
local_mount_dir_path_input: str
```

- *Type:* str

---

##### `network_filesystem_info_input`<sup>Optional</sup> <a name="network_filesystem_info_input" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput"></a>

```python
network_filesystem_info_input: ClusterClusterMountInfoNetworkFilesystemInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `remote_mount_dir_path_input`<sup>Optional</sup> <a name="remote_mount_dir_path_input" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput"></a>

```python
remote_mount_dir_path_input: str
```

- *Type:* str

---

##### `local_mount_dir_path`<sup>Required</sup> <a name="local_mount_dir_path" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath"></a>

```python
local_mount_dir_path: str
```

- *Type:* str

---

##### `remote_mount_dir_path`<sup>Required</sup> <a name="remote_mount_dir_path" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath"></a>

```python
remote_mount_dir_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterClusterMountInfo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>]

---


### ClusterDockerImageBasicAuthOutputReference <a name="ClusterDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterDockerImageBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: ClusterDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---


### ClusterDockerImageOutputReference <a name="ClusterDockerImageOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterDockerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth"></a>

```python
def put_basic_auth(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#password Cluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#username Cluster#username}.

---

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput">basic_auth_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth"></a>

```python
basic_auth: ClusterDockerImageBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a>

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput"></a>

```python
basic_auth_input: ClusterDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue"></a>

```python
internal_value: ClusterDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---


### ClusterGcpAttributesOutputReference <a name="ClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterGcpAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize">reset_boot_disk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount">reset_google_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors">reset_use_preemptible_executors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_boot_disk_size` <a name="reset_boot_disk_size" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize"></a>

```python
def reset_boot_disk_size() -> None
```

##### `reset_google_service_account` <a name="reset_google_service_account" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```python
def reset_google_service_account() -> None
```

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```

##### `reset_use_preemptible_executors` <a name="reset_use_preemptible_executors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```python
def reset_use_preemptible_executors() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput">boot_disk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput">google_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">use_preemptible_executors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize">boot_disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors">use_preemptible_executors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `boot_disk_size_input`<sup>Optional</sup> <a name="boot_disk_size_input" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```python
boot_disk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `google_service_account_input`<sup>Optional</sup> <a name="google_service_account_input" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```python
google_service_account_input: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_preemptible_executors_input`<sup>Optional</sup> <a name="use_preemptible_executors_input" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```python
use_preemptible_executors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `boot_disk_size`<sup>Required</sup> <a name="boot_disk_size" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize"></a>

```python
boot_disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `google_service_account`<sup>Required</sup> <a name="google_service_account" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_preemptible_executors`<sup>Required</sup> <a name="use_preemptible_executors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```python
use_preemptible_executors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue"></a>

```python
internal_value: ClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---


### ClusterInitScriptsAbfssOutputReference <a name="ClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsAbfssOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---


### ClusterInitScriptsDbfsOutputReference <a name="ClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---


### ClusterInitScriptsFileOutputReference <a name="ClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---


### ClusterInitScriptsGcsOutputReference <a name="ClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsGcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---


### ClusterInitScriptsList <a name="ClusterInitScriptsList" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]]

---


### ClusterInitScriptsOutputReference <a name="ClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss">put_abfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs">put_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs">put_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace">put_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss">reset_abfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs">reset_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs">reset_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace">reset_workspace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abfss` <a name="put_abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss"></a>

```python
def put_abfss(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `put_dbfs` <a name="put_dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs"></a>

```python
def put_dbfs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `put_file` <a name="put_file" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile"></a>

```python
def put_file(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `put_gcs` <a name="put_gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs"></a>

```python
def put_gcs(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3"></a>

```python
def put_s3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

###### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.cannedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

###### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.enableEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#endpoint Cluster#endpoint}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#kms_key Cluster#kms_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#region Cluster#region}.

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes"></a>

```python
def put_volumes(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `put_workspace` <a name="put_workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace"></a>

```python
def put_workspace(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#destination Cluster#destination}.

---

##### `reset_abfss` <a name="reset_abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss"></a>

```python
def reset_abfss() -> None
```

##### `reset_dbfs` <a name="reset_dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs"></a>

```python
def reset_dbfs() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_gcs` <a name="reset_gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs"></a>

```python
def reset_gcs() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_workspace` <a name="reset_workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace"></a>

```python
def reset_workspace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput">abfss_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput">dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput">gcs_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput">volumes_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput">workspace_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abfss`<sup>Required</sup> <a name="abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss"></a>

```python
abfss: ClusterInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a>

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs"></a>

```python
dbfs: ClusterInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file"></a>

```python
file: ClusterInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs"></a>

```python
gcs: ClusterInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3"></a>

```python
s3: ClusterInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes"></a>

```python
volumes: ClusterInitScriptsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a>

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace"></a>

```python
workspace: ClusterInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a>

---

##### `abfss_input`<sup>Optional</sup> <a name="abfss_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput"></a>

```python
abfss_input: ClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `dbfs_input`<sup>Optional</sup> <a name="dbfs_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput"></a>

```python
dbfs_input: ClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput"></a>

```python
file_input: ClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `gcs_input`<sup>Optional</sup> <a name="gcs_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput"></a>

```python
gcs_input: ClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input"></a>

```python
s3_input: ClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput"></a>

```python
volumes_input: ClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput"></a>

```python
workspace_input: ClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterInitScripts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>]

---


### ClusterInitScriptsS3OutputReference <a name="ClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl">reset_canned_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption">reset_enable_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canned_acl` <a name="reset_canned_acl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```python
def reset_canned_acl() -> None
```

##### `reset_enable_encryption` <a name="reset_enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```python
def reset_enable_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput">canned_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput">enable_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl">canned_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canned_acl_input`<sup>Optional</sup> <a name="canned_acl_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```python
canned_acl_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enable_encryption_input`<sup>Optional</sup> <a name="enable_encryption_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```python
enable_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `canned_acl`<sup>Required</sup> <a name="canned_acl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enable_encryption`<sup>Required</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---


### ClusterInitScriptsVolumesOutputReference <a name="ClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---


### ClusterInitScriptsWorkspaceOutputReference <a name="ClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterInitScriptsWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: ClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---


### ClusterLibraryCranOutputReference <a name="ClusterLibraryCranOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryCranOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput">package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_input`<sup>Optional</sup> <a name="package_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput"></a>

```python
package_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue"></a>

```python
internal_value: ClusterLibraryCran
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---


### ClusterLibraryList <a name="ClusterLibraryList" id="@cdktf/provider-databricks.cluster.ClusterLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterLibraryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterLibrary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]]

---


### ClusterLibraryMavenOutputReference <a name="ClusterLibraryMavenOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryMavenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput">coordinates_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates">coordinates</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coordinates_input`<sup>Optional</sup> <a name="coordinates_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput"></a>

```python
coordinates_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates"></a>

```python
coordinates: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue"></a>

```python
internal_value: ClusterLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---


### ClusterLibraryOutputReference <a name="ClusterLibraryOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran">put_cran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven">put_maven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi">put_pypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran">reset_cran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg">reset_egg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar">reset_jar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven">reset_maven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi">reset_pypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl">reset_whl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cran` <a name="put_cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran"></a>

```python
def put_cran(
  package: str,
  repo: str = None
) -> None
```

###### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran.parameter.package"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#package Cluster#package}.

---

###### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran.parameter.repo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}.

---

##### `put_maven` <a name="put_maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven"></a>

```python
def put_maven(
  coordinates: str,
  exclusions: typing.List[str] = None,
  repo: str = None
) -> None
```

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.coordinates"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#coordinates Cluster#coordinates}.

---

###### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.exclusions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#exclusions Cluster#exclusions}.

---

###### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.repo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}.

---

##### `put_pypi` <a name="put_pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi"></a>

```python
def put_pypi(
  package: str,
  repo: str = None
) -> None
```

###### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi.parameter.package"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#package Cluster#package}.

---

###### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi.parameter.repo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#repo Cluster#repo}.

---

##### `reset_cran` <a name="reset_cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran"></a>

```python
def reset_cran() -> None
```

##### `reset_egg` <a name="reset_egg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg"></a>

```python
def reset_egg() -> None
```

##### `reset_jar` <a name="reset_jar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar"></a>

```python
def reset_jar() -> None
```

##### `reset_maven` <a name="reset_maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven"></a>

```python
def reset_maven() -> None
```

##### `reset_pypi` <a name="reset_pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi"></a>

```python
def reset_pypi() -> None
```

##### `reset_whl` <a name="reset_whl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl"></a>

```python
def reset_whl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput">cran_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput">egg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput">jar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput">maven_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput">pypi_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput">whl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg">egg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar">jar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl">whl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran"></a>

```python
cran: ClusterLibraryCranOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven"></a>

```python
maven: ClusterLibraryMavenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi"></a>

```python
pypi: ClusterLibraryPypiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a>

---

##### `cran_input`<sup>Optional</sup> <a name="cran_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput"></a>

```python
cran_input: ClusterLibraryCran
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `egg_input`<sup>Optional</sup> <a name="egg_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput"></a>

```python
egg_input: str
```

- *Type:* str

---

##### `jar_input`<sup>Optional</sup> <a name="jar_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput"></a>

```python
jar_input: str
```

- *Type:* str

---

##### `maven_input`<sup>Optional</sup> <a name="maven_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput"></a>

```python
maven_input: ClusterLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `pypi_input`<sup>Optional</sup> <a name="pypi_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput"></a>

```python
pypi_input: ClusterLibraryPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `whl_input`<sup>Optional</sup> <a name="whl_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput"></a>

```python
whl_input: str
```

- *Type:* str

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg"></a>

```python
egg: str
```

- *Type:* str

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar"></a>

```python
jar: str
```

- *Type:* str

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl"></a>

```python
whl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterLibrary]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>]

---


### ClusterLibraryPypiOutputReference <a name="ClusterLibraryPypiOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterLibraryPypiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput">package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_input`<sup>Optional</sup> <a name="package_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput"></a>

```python
package_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue"></a>

```python
internal_value: ClusterLibraryPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>]

---


### ClusterWorkloadTypeClientsOutputReference <a name="ClusterWorkloadTypeClientsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterWorkloadTypeClientsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs">reset_jobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks">reset_notebooks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jobs` <a name="reset_jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs"></a>

```python
def reset_jobs() -> None
```

##### `reset_notebooks` <a name="reset_notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks"></a>

```python
def reset_notebooks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput">jobs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput">notebooks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs">jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks">notebooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jobs_input`<sup>Optional</sup> <a name="jobs_input" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput"></a>

```python
jobs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notebooks_input`<sup>Optional</sup> <a name="notebooks_input" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput"></a>

```python
notebooks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs"></a>

```python
jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notebooks`<sup>Required</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks"></a>

```python
notebooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue"></a>

```python
internal_value: ClusterWorkloadTypeClients
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


### ClusterWorkloadTypeOutputReference <a name="ClusterWorkloadTypeOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import cluster

cluster.ClusterWorkloadTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients">put_clients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clients` <a name="put_clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients"></a>

```python
def put_clients(
  jobs: typing.Union[bool, IResolvable] = None,
  notebooks: typing.Union[bool, IResolvable] = None
) -> None
```

###### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients.parameter.jobs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#jobs Cluster#jobs}.

---

###### `notebooks`<sup>Optional</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients.parameter.notebooks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/cluster#notebooks Cluster#notebooks}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients">clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput">clients_input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients"></a>

```python
clients: ClusterWorkloadTypeClientsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a>

---

##### `clients_input`<sup>Optional</sup> <a name="clients_input" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput"></a>

```python
clients_input: ClusterWorkloadTypeClients
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue"></a>

```python
internal_value: ClusterWorkloadType
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---



