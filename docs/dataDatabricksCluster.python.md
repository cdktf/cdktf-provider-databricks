# `dataDatabricksCluster` Submodule <a name="`dataDatabricksCluster` Submodule" id="@cdktf/provider-databricks.dataDatabricksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCluster <a name="DataDatabricksCluster" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str = None,
  cluster_info: DataDatabricksClusterClusterInfo = None,
  cluster_name: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.clusterInfo">cluster_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | cluster_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#id DataDatabricksCluster#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}.

---

##### `cluster_info`<sup>Optional</sup> <a name="cluster_info" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.clusterInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

cluster_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_info DataDatabricksCluster#cluster_info}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#id DataDatabricksCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo">put_cluster_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterInfo">reset_cluster_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cluster_info` <a name="put_cluster_info" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo"></a>

```python
def put_cluster_info(
  default_tags: typing.Mapping[str],
  spark_version: str,
  state: str,
  autoscale: DataDatabricksClusterClusterInfoAutoscale = None,
  autotermination_minutes: typing.Union[int, float] = None,
  aws_attributes: DataDatabricksClusterClusterInfoAwsAttributes = None,
  azure_attributes: DataDatabricksClusterClusterInfoAzureAttributes = None,
  cluster_cores: typing.Union[int, float] = None,
  cluster_id: str = None,
  cluster_log_conf: DataDatabricksClusterClusterInfoClusterLogConf = None,
  cluster_log_status: DataDatabricksClusterClusterInfoClusterLogStatus = None,
  cluster_memory_mb: typing.Union[int, float] = None,
  cluster_name: str = None,
  creator_user_name: str = None,
  custom_tags: typing.Mapping[str] = None,
  data_security_mode: str = None,
  docker_image: DataDatabricksClusterClusterInfoDockerImage = None,
  driver: DataDatabricksClusterClusterInfoDriver = None,
  driver_instance_pool_id: str = None,
  driver_node_type_id: str = None,
  enable_elastic_disk: typing.Union[bool, IResolvable] = None,
  enable_local_disk_encryption: typing.Union[bool, IResolvable] = None,
  executors: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoExecutors]] = None,
  gcp_attributes: DataDatabricksClusterClusterInfoGcpAttributes = None,
  init_scripts: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoInitScripts]] = None,
  instance_pool_id: str = None,
  jdbc_port: typing.Union[int, float] = None,
  last_activity_time: typing.Union[int, float] = None,
  last_state_loss_time: typing.Union[int, float] = None,
  node_type_id: str = None,
  num_workers: typing.Union[int, float] = None,
  policy_id: str = None,
  runtime_engine: str = None,
  single_user_name: str = None,
  spark_conf: typing.Mapping[str] = None,
  spark_context_id: typing.Union[int, float] = None,
  spark_env_vars: typing.Mapping[str] = None,
  ssh_public_keys: typing.List[str] = None,
  start_time: typing.Union[int, float] = None,
  state_message: str = None,
  terminate_time: typing.Union[int, float] = None,
  termination_reason: DataDatabricksClusterClusterInfoTerminationReason = None
) -> None
```

###### `default_tags`<sup>Required</sup> <a name="default_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.defaultTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#default_tags DataDatabricksCluster#default_tags}.

---

###### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.sparkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}.

---

###### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#state DataDatabricksCluster#state}.

---

###### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.autoscale"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#autoscale DataDatabricksCluster#autoscale}

---

###### `autotermination_minutes`<sup>Optional</sup> <a name="autotermination_minutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.autoterminationMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#autotermination_minutes DataDatabricksCluster#autotermination_minutes}.

---

###### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.awsAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#aws_attributes DataDatabricksCluster#aws_attributes}

---

###### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.azureAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#azure_attributes DataDatabricksCluster#azure_attributes}

---

###### `cluster_cores`<sup>Optional</sup> <a name="cluster_cores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.clusterCores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_cores DataDatabricksCluster#cluster_cores}.

---

###### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}.

---

###### `cluster_log_conf`<sup>Optional</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.clusterLogConf"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_log_conf DataDatabricksCluster#cluster_log_conf}

---

###### `cluster_log_status`<sup>Optional</sup> <a name="cluster_log_status" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.clusterLogStatus"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

cluster_log_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_log_status DataDatabricksCluster#cluster_log_status}

---

###### `cluster_memory_mb`<sup>Optional</sup> <a name="cluster_memory_mb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.clusterMemoryMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_memory_mb DataDatabricksCluster#cluster_memory_mb}.

---

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}.

---

###### `creator_user_name`<sup>Optional</sup> <a name="creator_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.creatorUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#creator_user_name DataDatabricksCluster#creator_user_name}.

---

###### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}.

---

###### `data_security_mode`<sup>Optional</sup> <a name="data_security_mode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.dataSecurityMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}.

---

###### `docker_image`<sup>Optional</sup> <a name="docker_image" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.dockerImage"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#docker_image DataDatabricksCluster#docker_image}

---

###### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.driver"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver DataDatabricksCluster#driver}

---

###### `driver_instance_pool_id`<sup>Optional</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.driverInstancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}.

---

###### `driver_node_type_id`<sup>Optional</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.driverNodeTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}.

---

###### `enable_elastic_disk`<sup>Optional</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.enableElasticDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}.

---

###### `enable_local_disk_encryption`<sup>Optional</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.enableLocalDiskEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}.

---

###### `executors`<sup>Optional</sup> <a name="executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.executors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]

executors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#executors DataDatabricksCluster#executors}

---

###### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.gcpAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#gcp_attributes DataDatabricksCluster#gcp_attributes}

---

###### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.initScripts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#init_scripts DataDatabricksCluster#init_scripts}

---

###### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.instancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}.

---

###### `jdbc_port`<sup>Optional</sup> <a name="jdbc_port" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.jdbcPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#jdbc_port DataDatabricksCluster#jdbc_port}.

---

###### `last_activity_time`<sup>Optional</sup> <a name="last_activity_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.lastActivityTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_activity_time DataDatabricksCluster#last_activity_time}.

---

###### `last_state_loss_time`<sup>Optional</sup> <a name="last_state_loss_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.lastStateLossTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_state_loss_time DataDatabricksCluster#last_state_loss_time}.

---

###### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.nodeTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}.

---

###### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.numWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}.

---

###### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}.

---

###### `runtime_engine`<sup>Optional</sup> <a name="runtime_engine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.runtimeEngine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}.

---

###### `single_user_name`<sup>Optional</sup> <a name="single_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.singleUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}.

---

###### `spark_conf`<sup>Optional</sup> <a name="spark_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.sparkConf"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}.

---

###### `spark_context_id`<sup>Optional</sup> <a name="spark_context_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.sparkContextId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_context_id DataDatabricksCluster#spark_context_id}.

---

###### `spark_env_vars`<sup>Optional</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.sparkEnvVars"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}.

---

###### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.startTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_time DataDatabricksCluster#start_time}.

---

###### `state_message`<sup>Optional</sup> <a name="state_message" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.stateMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#state_message DataDatabricksCluster#state_message}.

---

###### `terminate_time`<sup>Optional</sup> <a name="terminate_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.terminateTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#terminate_time DataDatabricksCluster#terminate_time}.

---

###### `termination_reason`<sup>Optional</sup> <a name="termination_reason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.putClusterInfo.parameter.terminationReason"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

termination_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#termination_reason DataDatabricksCluster#termination_reason}

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_cluster_info` <a name="reset_cluster_info" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterInfo"></a>

```python
def reset_cluster_info() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfo">cluster_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference">DataDatabricksClusterClusterInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfoInput">cluster_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_info`<sup>Required</sup> <a name="cluster_info" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfo"></a>

```python
cluster_info: DataDatabricksClusterClusterInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference">DataDatabricksClusterClusterInfoOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_info_input`<sup>Optional</sup> <a name="cluster_info_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterInfoInput"></a>

```python
cluster_info_input: DataDatabricksClusterClusterInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClusterClusterInfo <a name="DataDatabricksClusterClusterInfo" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfo(
  default_tags: typing.Mapping[str],
  spark_version: str,
  state: str,
  autoscale: DataDatabricksClusterClusterInfoAutoscale = None,
  autotermination_minutes: typing.Union[int, float] = None,
  aws_attributes: DataDatabricksClusterClusterInfoAwsAttributes = None,
  azure_attributes: DataDatabricksClusterClusterInfoAzureAttributes = None,
  cluster_cores: typing.Union[int, float] = None,
  cluster_id: str = None,
  cluster_log_conf: DataDatabricksClusterClusterInfoClusterLogConf = None,
  cluster_log_status: DataDatabricksClusterClusterInfoClusterLogStatus = None,
  cluster_memory_mb: typing.Union[int, float] = None,
  cluster_name: str = None,
  creator_user_name: str = None,
  custom_tags: typing.Mapping[str] = None,
  data_security_mode: str = None,
  docker_image: DataDatabricksClusterClusterInfoDockerImage = None,
  driver: DataDatabricksClusterClusterInfoDriver = None,
  driver_instance_pool_id: str = None,
  driver_node_type_id: str = None,
  enable_elastic_disk: typing.Union[bool, IResolvable] = None,
  enable_local_disk_encryption: typing.Union[bool, IResolvable] = None,
  executors: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoExecutors]] = None,
  gcp_attributes: DataDatabricksClusterClusterInfoGcpAttributes = None,
  init_scripts: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoInitScripts]] = None,
  instance_pool_id: str = None,
  jdbc_port: typing.Union[int, float] = None,
  last_activity_time: typing.Union[int, float] = None,
  last_state_loss_time: typing.Union[int, float] = None,
  node_type_id: str = None,
  num_workers: typing.Union[int, float] = None,
  policy_id: str = None,
  runtime_engine: str = None,
  single_user_name: str = None,
  spark_conf: typing.Mapping[str] = None,
  spark_context_id: typing.Union[int, float] = None,
  spark_env_vars: typing.Mapping[str] = None,
  ssh_public_keys: typing.List[str] = None,
  start_time: typing.Union[int, float] = None,
  state_message: str = None,
  terminate_time: typing.Union[int, float] = None,
  termination_reason: DataDatabricksClusterClusterInfoTerminationReason = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.defaultTags">default_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#default_tags DataDatabricksCluster#default_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#state DataDatabricksCluster#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoterminationMinutes">autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#autotermination_minutes DataDatabricksCluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterCores">cluster_cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_cores DataDatabricksCluster#cluster_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogStatus">cluster_log_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a></code> | cluster_log_status block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterMemoryMb">cluster_memory_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_memory_mb DataDatabricksCluster#cluster_memory_mb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.creatorUserName">creator_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#creator_user_name DataDatabricksCluster#creator_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dataSecurityMode">data_security_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dockerImage">docker_image</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driver">driver</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a></code> | driver block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.executors">executors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]</code> | executors block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.initScripts">init_scripts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.jdbcPort">jdbc_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#jdbc_port DataDatabricksCluster#jdbc_port}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastActivityTime">last_activity_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_activity_time DataDatabricksCluster#last_activity_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastStateLossTime">last_state_loss_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_state_loss_time DataDatabricksCluster#last_state_loss_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.runtimeEngine">runtime_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.singleUserName">single_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkContextId">spark_context_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_context_id DataDatabricksCluster#spark_context_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_time DataDatabricksCluster#start_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.stateMessage">state_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#state_message DataDatabricksCluster#state_message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminateTime">terminate_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#terminate_time DataDatabricksCluster#terminate_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminationReason">termination_reason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a></code> | termination_reason block. |

---

##### `default_tags`<sup>Required</sup> <a name="default_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.defaultTags"></a>

```python
default_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#default_tags DataDatabricksCluster#default_tags}.

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#state DataDatabricksCluster#state}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoscale"></a>

```python
autoscale: DataDatabricksClusterClusterInfoAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#autoscale DataDatabricksCluster#autoscale}

---

##### `autotermination_minutes`<sup>Optional</sup> <a name="autotermination_minutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.autoterminationMinutes"></a>

```python
autotermination_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#autotermination_minutes DataDatabricksCluster#autotermination_minutes}.

---

##### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.awsAttributes"></a>

```python
aws_attributes: DataDatabricksClusterClusterInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#aws_attributes DataDatabricksCluster#aws_attributes}

---

##### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.azureAttributes"></a>

```python
azure_attributes: DataDatabricksClusterClusterInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#azure_attributes DataDatabricksCluster#azure_attributes}

---

##### `cluster_cores`<sup>Optional</sup> <a name="cluster_cores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterCores"></a>

```python
cluster_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_cores DataDatabricksCluster#cluster_cores}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}.

---

##### `cluster_log_conf`<sup>Optional</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogConf"></a>

```python
cluster_log_conf: DataDatabricksClusterClusterInfoClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_log_conf DataDatabricksCluster#cluster_log_conf}

---

##### `cluster_log_status`<sup>Optional</sup> <a name="cluster_log_status" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterLogStatus"></a>

```python
cluster_log_status: DataDatabricksClusterClusterInfoClusterLogStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

cluster_log_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_log_status DataDatabricksCluster#cluster_log_status}

---

##### `cluster_memory_mb`<sup>Optional</sup> <a name="cluster_memory_mb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterMemoryMb"></a>

```python
cluster_memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_memory_mb DataDatabricksCluster#cluster_memory_mb}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}.

---

##### `creator_user_name`<sup>Optional</sup> <a name="creator_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.creatorUserName"></a>

```python
creator_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#creator_user_name DataDatabricksCluster#creator_user_name}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}.

---

##### `data_security_mode`<sup>Optional</sup> <a name="data_security_mode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dataSecurityMode"></a>

```python
data_security_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}.

---

##### `docker_image`<sup>Optional</sup> <a name="docker_image" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.dockerImage"></a>

```python
docker_image: DataDatabricksClusterClusterInfoDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#docker_image DataDatabricksCluster#docker_image}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driver"></a>

```python
driver: DataDatabricksClusterClusterInfoDriver
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver DataDatabricksCluster#driver}

---

##### `driver_instance_pool_id`<sup>Optional</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverInstancePoolId"></a>

```python
driver_instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}.

---

##### `driver_node_type_id`<sup>Optional</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.driverNodeTypeId"></a>

```python
driver_node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}.

---

##### `enable_elastic_disk`<sup>Optional</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableElasticDisk"></a>

```python
enable_elastic_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}.

---

##### `enable_local_disk_encryption`<sup>Optional</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.enableLocalDiskEncryption"></a>

```python
enable_local_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}.

---

##### `executors`<sup>Optional</sup> <a name="executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.executors"></a>

```python
executors: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoExecutors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]

executors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#executors DataDatabricksCluster#executors}

---

##### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.gcpAttributes"></a>

```python
gcp_attributes: DataDatabricksClusterClusterInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#gcp_attributes DataDatabricksCluster#gcp_attributes}

---

##### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.initScripts"></a>

```python
init_scripts: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#init_scripts DataDatabricksCluster#init_scripts}

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}.

---

##### `jdbc_port`<sup>Optional</sup> <a name="jdbc_port" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.jdbcPort"></a>

```python
jdbc_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#jdbc_port DataDatabricksCluster#jdbc_port}.

---

##### `last_activity_time`<sup>Optional</sup> <a name="last_activity_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastActivityTime"></a>

```python
last_activity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_activity_time DataDatabricksCluster#last_activity_time}.

---

##### `last_state_loss_time`<sup>Optional</sup> <a name="last_state_loss_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.lastStateLossTime"></a>

```python
last_state_loss_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_state_loss_time DataDatabricksCluster#last_state_loss_time}.

---

##### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}.

---

##### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}.

---

##### `runtime_engine`<sup>Optional</sup> <a name="runtime_engine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.runtimeEngine"></a>

```python
runtime_engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}.

---

##### `single_user_name`<sup>Optional</sup> <a name="single_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.singleUserName"></a>

```python
single_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}.

---

##### `spark_conf`<sup>Optional</sup> <a name="spark_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkConf"></a>

```python
spark_conf: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}.

---

##### `spark_context_id`<sup>Optional</sup> <a name="spark_context_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkContextId"></a>

```python
spark_context_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_context_id DataDatabricksCluster#spark_context_id}.

---

##### `spark_env_vars`<sup>Optional</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sparkEnvVars"></a>

```python
spark_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}.

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_time DataDatabricksCluster#start_time}.

---

##### `state_message`<sup>Optional</sup> <a name="state_message" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#state_message DataDatabricksCluster#state_message}.

---

##### `terminate_time`<sup>Optional</sup> <a name="terminate_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminateTime"></a>

```python
terminate_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#terminate_time DataDatabricksCluster#terminate_time}.

---

##### `termination_reason`<sup>Optional</sup> <a name="termination_reason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo.property.terminationReason"></a>

```python
termination_reason: DataDatabricksClusterClusterInfoTerminationReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

termination_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#termination_reason DataDatabricksCluster#termination_reason}

---

### DataDatabricksClusterClusterInfoAutoscale <a name="DataDatabricksClusterClusterInfoAutoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale(
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}. |

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}.

---

##### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}.

---

### DataDatabricksClusterClusterInfoAwsAttributes <a name="DataDatabricksClusterClusterInfoAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeCount">ebs_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeSize">ebs_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

##### `ebs_volume_count`<sup>Optional</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeCount"></a>

```python
ebs_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}.

---

##### `ebs_volume_size`<sup>Optional</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeSize"></a>

```python
ebs_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}.

---

##### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}.

---

##### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}.

---

##### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}.

---

### DataDatabricksClusterClusterInfoAzureAttributes <a name="DataDatabricksClusterClusterInfoAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes(
  availability: str = None,
  first_on_demand: typing.Union[int, float] = None,
  spot_bid_max_price: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

##### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}.

---

##### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}.

---

### DataDatabricksClusterClusterInfoClusterLogConf <a name="DataDatabricksClusterClusterInfoClusterLogConf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf(
  dbfs: DataDatabricksClusterClusterInfoClusterLogConfDbfs = None,
  s3: DataDatabricksClusterClusterInfoClusterLogConfS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a></code> | s3 block. |

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.dbfs"></a>

```python
dbfs: DataDatabricksClusterClusterInfoClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf.property.s3"></a>

```python
s3: DataDatabricksClusterClusterInfoClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}

---

### DataDatabricksClusterClusterInfoClusterLogConfDbfs <a name="DataDatabricksClusterClusterInfoClusterLogConfDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoClusterLogConfS3 <a name="DataDatabricksClusterClusterInfoClusterLogConfS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.cannedAcl">canned_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#region DataDatabricksCluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}.

---

##### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#region DataDatabricksCluster#region}.

---

### DataDatabricksClusterClusterInfoClusterLogStatus <a name="DataDatabricksClusterClusterInfoClusterLogStatus" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus(
  last_attempted: typing.Union[int, float] = None,
  last_exception: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastAttempted">last_attempted</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_attempted DataDatabricksCluster#last_attempted}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastException">last_exception</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_exception DataDatabricksCluster#last_exception}. |

---

##### `last_attempted`<sup>Optional</sup> <a name="last_attempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastAttempted"></a>

```python
last_attempted: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_attempted DataDatabricksCluster#last_attempted}.

---

##### `last_exception`<sup>Optional</sup> <a name="last_exception" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus.property.lastException"></a>

```python
last_exception: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_exception DataDatabricksCluster#last_exception}.

---

### DataDatabricksClusterClusterInfoDockerImage <a name="DataDatabricksClusterClusterInfoDockerImage" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage(
  url: str,
  basic_auth: DataDatabricksClusterClusterInfoDockerImageBasicAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#url DataDatabricksCluster#url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#url DataDatabricksCluster#url}.

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage.property.basicAuth"></a>

```python
basic_auth: DataDatabricksClusterClusterInfoDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#basic_auth DataDatabricksCluster#basic_auth}

---

### DataDatabricksClusterClusterInfoDockerImageBasicAuth <a name="DataDatabricksClusterClusterInfoDockerImageBasicAuth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#password DataDatabricksCluster#password}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#username DataDatabricksCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#password DataDatabricksCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#username DataDatabricksCluster#username}.

---

### DataDatabricksClusterClusterInfoDriver <a name="DataDatabricksClusterClusterInfoDriver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver(
  host_private_ip: str = None,
  instance_id: str = None,
  node_aws_attributes: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes = None,
  node_id: str = None,
  private_ip: str = None,
  public_dns: str = None,
  start_timestamp: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.hostPrivateIp">host_private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeAwsAttributes">node_aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a></code> | node_aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeId">node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.publicDns">public_dns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.startTimestamp">start_timestamp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}. |

---

##### `host_private_ip`<sup>Optional</sup> <a name="host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.hostPrivateIp"></a>

```python
host_private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}.

---

##### `node_aws_attributes`<sup>Optional</sup> <a name="node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeAwsAttributes"></a>

```python
node_aws_attributes: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

node_aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}.

---

##### `public_dns`<sup>Optional</sup> <a name="public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}.

---

##### `start_timestamp`<sup>Optional</sup> <a name="start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver.property.startTimestamp"></a>

```python
start_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}.

---

### DataDatabricksClusterClusterInfoDriverNodeAwsAttributes <a name="DataDatabricksClusterClusterInfoDriverNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes(
  is_spot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes.property.isSpot">is_spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}. |

---

##### `is_spot`<sup>Optional</sup> <a name="is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes.property.isSpot"></a>

```python
is_spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}.

---

### DataDatabricksClusterClusterInfoExecutors <a name="DataDatabricksClusterClusterInfoExecutors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors(
  host_private_ip: str = None,
  instance_id: str = None,
  node_aws_attributes: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes = None,
  node_id: str = None,
  private_ip: str = None,
  public_dns: str = None,
  start_timestamp: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.hostPrivateIp">host_private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeAwsAttributes">node_aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a></code> | node_aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeId">node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.publicDns">public_dns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.startTimestamp">start_timestamp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}. |

---

##### `host_private_ip`<sup>Optional</sup> <a name="host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.hostPrivateIp"></a>

```python
host_private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}.

---

##### `node_aws_attributes`<sup>Optional</sup> <a name="node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeAwsAttributes"></a>

```python
node_aws_attributes: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

node_aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}.

---

##### `public_dns`<sup>Optional</sup> <a name="public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}.

---

##### `start_timestamp`<sup>Optional</sup> <a name="start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors.property.startTimestamp"></a>

```python
start_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}.

---

### DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes <a name="DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes(
  is_spot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes.property.isSpot">is_spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}. |

---

##### `is_spot`<sup>Optional</sup> <a name="is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes.property.isSpot"></a>

```python
is_spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}.

---

### DataDatabricksClusterClusterInfoGcpAttributes <a name="DataDatabricksClusterClusterInfoGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.bootDiskSize">boot_disk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.usePreemptibleExecutors">use_preemptible_executors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

##### `boot_disk_size`<sup>Optional</sup> <a name="boot_disk_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.bootDiskSize"></a>

```python
boot_disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}.

---

##### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}.

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}.

---

##### `use_preemptible_executors`<sup>Optional</sup> <a name="use_preemptible_executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.usePreemptibleExecutors"></a>

```python
use_preemptible_executors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}.

---

### DataDatabricksClusterClusterInfoInitScripts <a name="DataDatabricksClusterClusterInfoInitScripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts(
  abfss: DataDatabricksClusterClusterInfoInitScriptsAbfss = None,
  dbfs: DataDatabricksClusterClusterInfoInitScriptsDbfs = None,
  file: DataDatabricksClusterClusterInfoInitScriptsFile = None,
  gcs: DataDatabricksClusterClusterInfoInitScriptsGcs = None,
  s3: DataDatabricksClusterClusterInfoInitScriptsS3 = None,
  volumes: DataDatabricksClusterClusterInfoInitScriptsVolumes = None,
  workspace: DataDatabricksClusterClusterInfoInitScriptsWorkspace = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a></code> | workspace block. |

---

##### `abfss`<sup>Optional</sup> <a name="abfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.abfss"></a>

```python
abfss: DataDatabricksClusterClusterInfoInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#abfss DataDatabricksCluster#abfss}

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.dbfs"></a>

```python
dbfs: DataDatabricksClusterClusterInfoInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.file"></a>

```python
file: DataDatabricksClusterClusterInfoInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#file DataDatabricksCluster#file}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.gcs"></a>

```python
gcs: DataDatabricksClusterClusterInfoInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#gcs DataDatabricksCluster#gcs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.s3"></a>

```python
s3: DataDatabricksClusterClusterInfoInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.volumes"></a>

```python
volumes: DataDatabricksClusterClusterInfoInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#volumes DataDatabricksCluster#volumes}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts.property.workspace"></a>

```python
workspace: DataDatabricksClusterClusterInfoInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#workspace DataDatabricksCluster#workspace}

---

### DataDatabricksClusterClusterInfoInitScriptsAbfss <a name="DataDatabricksClusterClusterInfoInitScriptsAbfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsDbfs <a name="DataDatabricksClusterClusterInfoInitScriptsDbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsFile <a name="DataDatabricksClusterClusterInfoInitScriptsFile" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsGcs <a name="DataDatabricksClusterClusterInfoInitScriptsGcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsS3 <a name="DataDatabricksClusterClusterInfoInitScriptsS3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.cannedAcl">canned_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#region DataDatabricksCluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}.

---

##### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#region DataDatabricksCluster#region}.

---

### DataDatabricksClusterClusterInfoInitScriptsVolumes <a name="DataDatabricksClusterClusterInfoInitScriptsVolumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoInitScriptsWorkspace <a name="DataDatabricksClusterClusterInfoInitScriptsWorkspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

### DataDatabricksClusterClusterInfoTerminationReason <a name="DataDatabricksClusterClusterInfoTerminationReason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason(
  code: str = None,
  parameters: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#code DataDatabricksCluster#code}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#parameters DataDatabricksCluster#parameters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#type DataDatabricksCluster#type}. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#code DataDatabricksCluster#code}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#parameters DataDatabricksCluster#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#type DataDatabricksCluster#type}.

---

### DataDatabricksClusterConfig <a name="DataDatabricksClusterConfig" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str = None,
  cluster_info: DataDatabricksClusterClusterInfo = None,
  cluster_name: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterInfo">cluster_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | cluster_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#id DataDatabricksCluster#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}.

---

##### `cluster_info`<sup>Optional</sup> <a name="cluster_info" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterInfo"></a>

```python
cluster_info: DataDatabricksClusterClusterInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

cluster_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_info DataDatabricksCluster#cluster_info}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#id DataDatabricksCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksClusterClusterInfoAutoscaleOutputReference <a name="DataDatabricksClusterClusterInfoAutoscaleOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMaxWorkers">reset_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMinWorkers">reset_min_workers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_workers` <a name="reset_max_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMaxWorkers"></a>

```python
def reset_max_workers() -> None
```

##### `reset_min_workers` <a name="reset_min_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.resetMinWorkers"></a>

```python
def reset_min_workers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkersInput">max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkersInput">min_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_workers_input`<sup>Optional</sup> <a name="max_workers_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkersInput"></a>

```python
max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers_input`<sup>Optional</sup> <a name="min_workers_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkersInput"></a>

```python
min_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers`<sup>Required</sup> <a name="min_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

---


### DataDatabricksClusterClusterInfoAwsAttributesOutputReference <a name="DataDatabricksClusterClusterInfoAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeCount">reset_ebs_volume_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeSize">reset_ebs_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeType">reset_ebs_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetFirstOnDemand">reset_first_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetSpotBidPricePercent">reset_spot_bid_price_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_ebs_volume_count` <a name="reset_ebs_volume_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```python
def reset_ebs_volume_count() -> None
```

##### `reset_ebs_volume_size` <a name="reset_ebs_volume_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```python
def reset_ebs_volume_size() -> None
```

##### `reset_ebs_volume_type` <a name="reset_ebs_volume_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetEbsVolumeType"></a>

```python
def reset_ebs_volume_type() -> None
```

##### `reset_first_on_demand` <a name="reset_first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetFirstOnDemand"></a>

```python
def reset_first_on_demand() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_spot_bid_price_percent` <a name="reset_spot_bid_price_percent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```python
def reset_spot_bid_price_percent() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCountInput">ebs_volume_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSizeInput">ebs_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeTypeInput">ebs_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemandInput">first_on_demand_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercentInput">spot_bid_price_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCount">ebs_volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSize">ebs_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `ebs_volume_count_input`<sup>Optional</sup> <a name="ebs_volume_count_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```python
ebs_volume_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_size_input`<sup>Optional</sup> <a name="ebs_volume_size_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```python
ebs_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type_input`<sup>Optional</sup> <a name="ebs_volume_type_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```python
ebs_volume_type_input: str
```

- *Type:* str

---

##### `first_on_demand_input`<sup>Optional</sup> <a name="first_on_demand_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```python
first_on_demand_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `spot_bid_price_percent_input`<sup>Optional</sup> <a name="spot_bid_price_percent_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```python
spot_bid_price_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `ebs_volume_count`<sup>Required</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```python
ebs_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_size`<sup>Required</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```python
ebs_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `first_on_demand`<sup>Required</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `spot_bid_price_percent`<sup>Required</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

---


### DataDatabricksClusterClusterInfoAzureAttributesOutputReference <a name="DataDatabricksClusterClusterInfoAzureAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetFirstOnDemand">reset_first_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetSpotBidMaxPrice">reset_spot_bid_max_price</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_first_on_demand` <a name="reset_first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetFirstOnDemand"></a>

```python
def reset_first_on_demand() -> None
```

##### `reset_spot_bid_max_price` <a name="reset_spot_bid_max_price" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```python
def reset_spot_bid_max_price() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemandInput">first_on_demand_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput">spot_bid_max_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `first_on_demand_input`<sup>Optional</sup> <a name="first_on_demand_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```python
first_on_demand_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_bid_max_price_input`<sup>Optional</sup> <a name="spot_bid_max_price_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```python
spot_bid_max_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `first_on_demand`<sup>Required</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_bid_max_price`<sup>Required</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

---


### DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference <a name="DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

---


### DataDatabricksClusterClusterInfoClusterLogConfOutputReference <a name="DataDatabricksClusterClusterInfoClusterLogConfOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putDbfs">put_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetDbfs">reset_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dbfs` <a name="put_dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putDbfs"></a>

```python
def put_dbfs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putDbfs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3"></a>

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

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

###### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.cannedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}.

---

###### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.enableEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}.

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.putS3.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#region DataDatabricksCluster#region}.

---

##### `reset_dbfs` <a name="reset_dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetDbfs"></a>

```python
def reset_dbfs() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference">DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference">DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfsInput">dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfs"></a>

```python
dbfs: DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference">DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3"></a>

```python
s3: DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference">DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference</a>

---

##### `dbfs_input`<sup>Optional</sup> <a name="dbfs_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.dbfsInput"></a>

```python
dbfs_input: DataDatabricksClusterClusterInfoClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.s3Input"></a>

```python
s3_input: DataDatabricksClusterClusterInfoClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

---


### DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference <a name="DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetCannedAcl">reset_canned_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEnableEncryption">reset_enable_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canned_acl` <a name="reset_canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetCannedAcl"></a>

```python
def reset_canned_acl() -> None
```

##### `reset_enable_encryption` <a name="reset_enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```python
def reset_enable_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAclInput">canned_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryptionInput">enable_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAcl">canned_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canned_acl_input`<sup>Optional</sup> <a name="canned_acl_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```python
canned_acl_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enable_encryption_input`<sup>Optional</sup> <a name="enable_encryption_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```python
enable_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `canned_acl`<sup>Required</sup> <a name="canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enable_encryption`<sup>Required</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

---


### DataDatabricksClusterClusterInfoClusterLogStatusOutputReference <a name="DataDatabricksClusterClusterInfoClusterLogStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastAttempted">reset_last_attempted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastException">reset_last_exception</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_last_attempted` <a name="reset_last_attempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastAttempted"></a>

```python
def reset_last_attempted() -> None
```

##### `reset_last_exception` <a name="reset_last_exception" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.resetLastException"></a>

```python
def reset_last_exception() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttemptedInput">last_attempted_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastExceptionInput">last_exception_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttempted">last_attempted</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastException">last_exception</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_attempted_input`<sup>Optional</sup> <a name="last_attempted_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttemptedInput"></a>

```python
last_attempted_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_exception_input`<sup>Optional</sup> <a name="last_exception_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastExceptionInput"></a>

```python
last_exception_input: str
```

- *Type:* str

---

##### `last_attempted`<sup>Required</sup> <a name="last_attempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastAttempted"></a>

```python
last_attempted: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_exception`<sup>Required</sup> <a name="last_exception" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.lastException"></a>

```python
last_exception: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoClusterLogStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

---


### DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference <a name="DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

---


### DataDatabricksClusterClusterInfoDockerImageOutputReference <a name="DataDatabricksClusterClusterInfoDockerImageOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth"></a>

```python
def put_basic_auth(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#password DataDatabricksCluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.putBasicAuth.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#username DataDatabricksCluster#username}.

---

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference">DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuthInput">basic_auth_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuth"></a>

```python
basic_auth: DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference">DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference</a>

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.basicAuthInput"></a>

```python
basic_auth_input: DataDatabricksClusterClusterInfoDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

---


### DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference <a name="DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resetIsSpot">reset_is_spot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_spot` <a name="reset_is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.resetIsSpot"></a>

```python
def reset_is_spot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpotInput">is_spot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpot">is_spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_spot_input`<sup>Optional</sup> <a name="is_spot_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpotInput"></a>

```python
is_spot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_spot`<sup>Required</sup> <a name="is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.isSpot"></a>

```python
is_spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

---


### DataDatabricksClusterClusterInfoDriverOutputReference <a name="DataDatabricksClusterClusterInfoDriverOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.putNodeAwsAttributes">put_node_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetHostPrivateIp">reset_host_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeAwsAttributes">reset_node_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeId">reset_node_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPublicDns">reset_public_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetStartTimestamp">reset_start_timestamp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_aws_attributes` <a name="put_node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.putNodeAwsAttributes"></a>

```python
def put_node_aws_attributes(
  is_spot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_spot`<sup>Optional</sup> <a name="is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.putNodeAwsAttributes.parameter.isSpot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}.

---

##### `reset_host_private_ip` <a name="reset_host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetHostPrivateIp"></a>

```python
def reset_host_private_ip() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_node_aws_attributes` <a name="reset_node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeAwsAttributes"></a>

```python
def reset_node_aws_attributes() -> None
```

##### `reset_node_id` <a name="reset_node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetNodeId"></a>

```python
def reset_node_id() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_public_dns` <a name="reset_public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetPublicDns"></a>

```python
def reset_public_dns() -> None
```

##### `reset_start_timestamp` <a name="reset_start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.resetStartTimestamp"></a>

```python
def reset_start_timestamp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributes">node_aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIpInput">host_private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributesInput">node_aws_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDnsInput">public_dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestampInput">start_timestamp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIp">host_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDns">public_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestamp">start_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_aws_attributes`<sup>Required</sup> <a name="node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributes"></a>

```python
node_aws_attributes: DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference</a>

---

##### `host_private_ip_input`<sup>Optional</sup> <a name="host_private_ip_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIpInput"></a>

```python
host_private_ip_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `node_aws_attributes_input`<sup>Optional</sup> <a name="node_aws_attributes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeAwsAttributesInput"></a>

```python
node_aws_attributes_input: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `public_dns_input`<sup>Optional</sup> <a name="public_dns_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDnsInput"></a>

```python
public_dns_input: str
```

- *Type:* str

---

##### `start_timestamp_input`<sup>Optional</sup> <a name="start_timestamp_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestampInput"></a>

```python
start_timestamp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_private_ip`<sup>Required</sup> <a name="host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.hostPrivateIp"></a>

```python
host_private_ip: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_dns`<sup>Required</sup> <a name="public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.startTimestamp"></a>

```python
start_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoDriver
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

---


### DataDatabricksClusterClusterInfoExecutorsList <a name="DataDatabricksClusterClusterInfoExecutorsList" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksClusterClusterInfoExecutorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoExecutors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]

---


### DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference <a name="DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resetIsSpot">reset_is_spot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_spot` <a name="reset_is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.resetIsSpot"></a>

```python
def reset_is_spot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpotInput">is_spot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpot">is_spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_spot_input`<sup>Optional</sup> <a name="is_spot_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpotInput"></a>

```python
is_spot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_spot`<sup>Required</sup> <a name="is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.isSpot"></a>

```python
is_spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

---


### DataDatabricksClusterClusterInfoExecutorsOutputReference <a name="DataDatabricksClusterClusterInfoExecutorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.putNodeAwsAttributes">put_node_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetHostPrivateIp">reset_host_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeAwsAttributes">reset_node_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeId">reset_node_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPublicDns">reset_public_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetStartTimestamp">reset_start_timestamp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_aws_attributes` <a name="put_node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.putNodeAwsAttributes"></a>

```python
def put_node_aws_attributes(
  is_spot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_spot`<sup>Optional</sup> <a name="is_spot" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.putNodeAwsAttributes.parameter.isSpot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}.

---

##### `reset_host_private_ip` <a name="reset_host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetHostPrivateIp"></a>

```python
def reset_host_private_ip() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_node_aws_attributes` <a name="reset_node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeAwsAttributes"></a>

```python
def reset_node_aws_attributes() -> None
```

##### `reset_node_id` <a name="reset_node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetNodeId"></a>

```python
def reset_node_id() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_public_dns` <a name="reset_public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetPublicDns"></a>

```python
def reset_public_dns() -> None
```

##### `reset_start_timestamp` <a name="reset_start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.resetStartTimestamp"></a>

```python
def reset_start_timestamp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributes">node_aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIpInput">host_private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributesInput">node_aws_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDnsInput">public_dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestampInput">start_timestamp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIp">host_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDns">public_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestamp">start_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_aws_attributes`<sup>Required</sup> <a name="node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributes"></a>

```python
node_aws_attributes: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference</a>

---

##### `host_private_ip_input`<sup>Optional</sup> <a name="host_private_ip_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIpInput"></a>

```python
host_private_ip_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `node_aws_attributes_input`<sup>Optional</sup> <a name="node_aws_attributes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeAwsAttributesInput"></a>

```python
node_aws_attributes_input: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes">DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes</a>

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `public_dns_input`<sup>Optional</sup> <a name="public_dns_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDnsInput"></a>

```python
public_dns_input: str
```

- *Type:* str

---

##### `start_timestamp_input`<sup>Optional</sup> <a name="start_timestamp_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestampInput"></a>

```python
start_timestamp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_private_ip`<sup>Required</sup> <a name="host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.hostPrivateIp"></a>

```python
host_private_ip: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_dns`<sup>Required</sup> <a name="public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.startTimestamp"></a>

```python
start_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksClusterClusterInfoExecutors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]

---


### DataDatabricksClusterClusterInfoGcpAttributesOutputReference <a name="DataDatabricksClusterClusterInfoGcpAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetBootDiskSize">reset_boot_disk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetGoogleServiceAccount">reset_google_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetUsePreemptibleExecutors">reset_use_preemptible_executors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_boot_disk_size` <a name="reset_boot_disk_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetBootDiskSize"></a>

```python
def reset_boot_disk_size() -> None
```

##### `reset_google_service_account` <a name="reset_google_service_account" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```python
def reset_google_service_account() -> None
```

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```

##### `reset_use_preemptible_executors` <a name="reset_use_preemptible_executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```python
def reset_use_preemptible_executors() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSizeInput">boot_disk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccountInput">google_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">use_preemptible_executors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSize">boot_disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutors">use_preemptible_executors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `boot_disk_size_input`<sup>Optional</sup> <a name="boot_disk_size_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```python
boot_disk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `google_service_account_input`<sup>Optional</sup> <a name="google_service_account_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```python
google_service_account_input: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_preemptible_executors_input`<sup>Optional</sup> <a name="use_preemptible_executors_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```python
use_preemptible_executors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `boot_disk_size`<sup>Required</sup> <a name="boot_disk_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.bootDiskSize"></a>

```python
boot_disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `google_service_account`<sup>Required</sup> <a name="google_service_account" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_preemptible_executors`<sup>Required</sup> <a name="use_preemptible_executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```python
use_preemptible_executors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

---


### DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

---


### DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

---


### DataDatabricksClusterClusterInfoInitScriptsFileOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsFileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

---


### DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

---


### DataDatabricksClusterClusterInfoInitScriptsList <a name="DataDatabricksClusterClusterInfoInitScriptsList" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksClusterClusterInfoInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]

---


### DataDatabricksClusterClusterInfoInitScriptsOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putAbfss">put_abfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putDbfs">put_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putGcs">put_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putWorkspace">put_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetAbfss">reset_abfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetDbfs">reset_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetGcs">reset_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetWorkspace">reset_workspace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abfss` <a name="put_abfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putAbfss"></a>

```python
def put_abfss(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putAbfss.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `put_dbfs` <a name="put_dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putDbfs"></a>

```python
def put_dbfs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putDbfs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `put_file` <a name="put_file" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putFile"></a>

```python
def put_file(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putFile.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `put_gcs` <a name="put_gcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putGcs"></a>

```python
def put_gcs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putGcs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3"></a>

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

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

###### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.cannedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}.

---

###### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.enableEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}.

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putS3.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#region DataDatabricksCluster#region}.

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putVolumes"></a>

```python
def put_volumes(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putVolumes.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `put_workspace` <a name="put_workspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putWorkspace"></a>

```python
def put_workspace(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.putWorkspace.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#destination DataDatabricksCluster#destination}.

---

##### `reset_abfss` <a name="reset_abfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetAbfss"></a>

```python
def reset_abfss() -> None
```

##### `reset_dbfs` <a name="reset_dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetDbfs"></a>

```python
def reset_dbfs() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_gcs` <a name="reset_gcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetGcs"></a>

```python
def reset_gcs() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_workspace` <a name="reset_workspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.resetWorkspace"></a>

```python
def reset_workspace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference">DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference">DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference">DataDatabricksClusterClusterInfoInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference">DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference">DataDatabricksClusterClusterInfoInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference">DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference">DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfssInput">abfss_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfsInput">dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcsInput">gcs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumesInput">volumes_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspaceInput">workspace_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abfss`<sup>Required</sup> <a name="abfss" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfss"></a>

```python
abfss: DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference">DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference</a>

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfs"></a>

```python
dbfs: DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference">DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.file"></a>

```python
file: DataDatabricksClusterClusterInfoInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFileOutputReference">DataDatabricksClusterClusterInfoInitScriptsFileOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcs"></a>

```python
gcs: DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference">DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3"></a>

```python
s3: DataDatabricksClusterClusterInfoInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference">DataDatabricksClusterClusterInfoInitScriptsS3OutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumes"></a>

```python
volumes: DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference">DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference</a>

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspace"></a>

```python
workspace: DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference">DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference</a>

---

##### `abfss_input`<sup>Optional</sup> <a name="abfss_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.abfssInput"></a>

```python
abfss_input: DataDatabricksClusterClusterInfoInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsAbfss">DataDatabricksClusterClusterInfoInitScriptsAbfss</a>

---

##### `dbfs_input`<sup>Optional</sup> <a name="dbfs_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.dbfsInput"></a>

```python
dbfs_input: DataDatabricksClusterClusterInfoInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsDbfs">DataDatabricksClusterClusterInfoInitScriptsDbfs</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.fileInput"></a>

```python
file_input: DataDatabricksClusterClusterInfoInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsFile">DataDatabricksClusterClusterInfoInitScriptsFile</a>

---

##### `gcs_input`<sup>Optional</sup> <a name="gcs_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.gcsInput"></a>

```python
gcs_input: DataDatabricksClusterClusterInfoInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsGcs">DataDatabricksClusterClusterInfoInitScriptsGcs</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.s3Input"></a>

```python
s3_input: DataDatabricksClusterClusterInfoInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.volumesInput"></a>

```python
volumes_input: DataDatabricksClusterClusterInfoInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.workspaceInput"></a>

```python
workspace_input: DataDatabricksClusterClusterInfoInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksClusterClusterInfoInitScripts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]

---


### DataDatabricksClusterClusterInfoInitScriptsS3OutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsS3OutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetCannedAcl">reset_canned_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEnableEncryption">reset_enable_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canned_acl` <a name="reset_canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetCannedAcl"></a>

```python
def reset_canned_acl() -> None
```

##### `reset_enable_encryption` <a name="reset_enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEnableEncryption"></a>

```python
def reset_enable_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAclInput">canned_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryptionInput">enable_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAcl">canned_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canned_acl_input`<sup>Optional</sup> <a name="canned_acl_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAclInput"></a>

```python
canned_acl_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enable_encryption_input`<sup>Optional</sup> <a name="enable_encryption_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```python
enable_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `canned_acl`<sup>Required</sup> <a name="canned_acl" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enable_encryption`<sup>Required</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3OutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsS3">DataDatabricksClusterClusterInfoInitScriptsS3</a>

---


### DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsVolumes">DataDatabricksClusterClusterInfoInitScriptsVolumes</a>

---


### DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference <a name="DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsWorkspace">DataDatabricksClusterClusterInfoInitScriptsWorkspace</a>

---


### DataDatabricksClusterClusterInfoOutputReference <a name="DataDatabricksClusterClusterInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes">put_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes">put_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf">put_cluster_log_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus">put_cluster_log_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage">put_docker_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver">put_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putExecutors">put_executors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes">put_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putInitScripts">put_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason">put_termination_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoterminationMinutes">reset_autotermination_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAwsAttributes">reset_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAzureAttributes">reset_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterCores">reset_cluster_cores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogConf">reset_cluster_log_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogStatus">reset_cluster_log_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterMemoryMb">reset_cluster_memory_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCreatorUserName">reset_creator_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDataSecurityMode">reset_data_security_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDockerImage">reset_docker_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriver">reset_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverInstancePoolId">reset_driver_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverNodeTypeId">reset_driver_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableElasticDisk">reset_enable_elastic_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableLocalDiskEncryption">reset_enable_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetExecutors">reset_executors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetGcpAttributes">reset_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInitScripts">reset_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInstancePoolId">reset_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetJdbcPort">reset_jdbc_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastActivityTime">reset_last_activity_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastStateLossTime">reset_last_state_loss_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNodeTypeId">reset_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNumWorkers">reset_num_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetRuntimeEngine">reset_runtime_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSingleUserName">reset_single_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkConf">reset_spark_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkContextId">reset_spark_context_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkEnvVars">reset_spark_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStateMessage">reset_state_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminateTime">reset_terminate_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminationReason">reset_termination_reason</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale"></a>

```python
def put_autoscale(
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None
) -> None
```

###### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale.parameter.maxWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}.

---

###### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAutoscale.parameter.minWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}.

---

##### `put_aws_attributes` <a name="put_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes"></a>

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

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

###### `ebs_volume_count`<sup>Optional</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.ebsVolumeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}.

---

###### `ebs_volume_size`<sup>Optional</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.ebsVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}.

---

###### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.ebsVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}.

---

###### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.firstOnDemand"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}.

---

###### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}.

---

###### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.spotBidPricePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAwsAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}.

---

##### `put_azure_attributes` <a name="put_azure_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes"></a>

```python
def put_azure_attributes(
  availability: str = None,
  first_on_demand: typing.Union[int, float] = None,
  spot_bid_max_price: typing.Union[int, float] = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

###### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes.parameter.firstOnDemand"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}.

---

###### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putAzureAttributes.parameter.spotBidMaxPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}.

---

##### `put_cluster_log_conf` <a name="put_cluster_log_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf"></a>

```python
def put_cluster_log_conf(
  dbfs: DataDatabricksClusterClusterInfoClusterLogConfDbfs = None,
  s3: DataDatabricksClusterClusterInfoClusterLogConfS3 = None
) -> None
```

###### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf.parameter.dbfs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfDbfs">DataDatabricksClusterClusterInfoClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogConf.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfS3">DataDatabricksClusterClusterInfoClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}

---

##### `put_cluster_log_status` <a name="put_cluster_log_status" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus"></a>

```python
def put_cluster_log_status(
  last_attempted: typing.Union[int, float] = None,
  last_exception: str = None
) -> None
```

###### `last_attempted`<sup>Optional</sup> <a name="last_attempted" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus.parameter.lastAttempted"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_attempted DataDatabricksCluster#last_attempted}.

---

###### `last_exception`<sup>Optional</sup> <a name="last_exception" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putClusterLogStatus.parameter.lastException"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#last_exception DataDatabricksCluster#last_exception}.

---

##### `put_docker_image` <a name="put_docker_image" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage"></a>

```python
def put_docker_image(
  url: str,
  basic_auth: DataDatabricksClusterClusterInfoDockerImageBasicAuth = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#url DataDatabricksCluster#url}.

---

###### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDockerImage.parameter.basicAuth"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageBasicAuth">DataDatabricksClusterClusterInfoDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#basic_auth DataDatabricksCluster#basic_auth}

---

##### `put_driver` <a name="put_driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver"></a>

```python
def put_driver(
  host_private_ip: str = None,
  instance_id: str = None,
  node_aws_attributes: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes = None,
  node_id: str = None,
  private_ip: str = None,
  public_dns: str = None,
  start_timestamp: typing.Union[int, float] = None
) -> None
```

###### `host_private_ip`<sup>Optional</sup> <a name="host_private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.hostPrivateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}.

---

###### `node_aws_attributes`<sup>Optional</sup> <a name="node_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.nodeAwsAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverNodeAwsAttributes">DataDatabricksClusterClusterInfoDriverNodeAwsAttributes</a>

node_aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}

---

###### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.nodeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}.

---

###### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}.

---

###### `public_dns`<sup>Optional</sup> <a name="public_dns" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.publicDns"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}.

---

###### `start_timestamp`<sup>Optional</sup> <a name="start_timestamp" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putDriver.parameter.startTimestamp"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}.

---

##### `put_executors` <a name="put_executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putExecutors"></a>

```python
def put_executors(
  value: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoExecutors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putExecutors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]

---

##### `put_gcp_attributes` <a name="put_gcp_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes"></a>

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

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#availability DataDatabricksCluster#availability}.

---

###### `boot_disk_size`<sup>Optional</sup> <a name="boot_disk_size" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.bootDiskSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}.

---

###### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.googleServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}.

---

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}.

---

###### `use_preemptible_executors`<sup>Optional</sup> <a name="use_preemptible_executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.usePreemptibleExecutors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putGcpAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}.

---

##### `put_init_scripts` <a name="put_init_scripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putInitScripts"></a>

```python
def put_init_scripts(
  value: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoInitScripts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putInitScripts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]

---

##### `put_termination_reason` <a name="put_termination_reason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason"></a>

```python
def put_termination_reason(
  code: str = None,
  parameters: typing.Mapping[str] = None,
  type: str = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#code DataDatabricksCluster#code}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#parameters DataDatabricksCluster#parameters}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.putTerminationReason.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.2/docs/data-sources/cluster#type DataDatabricksCluster#type}.

---

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_autotermination_minutes` <a name="reset_autotermination_minutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAutoterminationMinutes"></a>

```python
def reset_autotermination_minutes() -> None
```

##### `reset_aws_attributes` <a name="reset_aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAwsAttributes"></a>

```python
def reset_aws_attributes() -> None
```

##### `reset_azure_attributes` <a name="reset_azure_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetAzureAttributes"></a>

```python
def reset_azure_attributes() -> None
```

##### `reset_cluster_cores` <a name="reset_cluster_cores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterCores"></a>

```python
def reset_cluster_cores() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_cluster_log_conf` <a name="reset_cluster_log_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogConf"></a>

```python
def reset_cluster_log_conf() -> None
```

##### `reset_cluster_log_status` <a name="reset_cluster_log_status" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterLogStatus"></a>

```python
def reset_cluster_log_status() -> None
```

##### `reset_cluster_memory_mb` <a name="reset_cluster_memory_mb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterMemoryMb"></a>

```python
def reset_cluster_memory_mb() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_creator_user_name` <a name="reset_creator_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCreatorUserName"></a>

```python
def reset_creator_user_name() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_data_security_mode` <a name="reset_data_security_mode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDataSecurityMode"></a>

```python
def reset_data_security_mode() -> None
```

##### `reset_docker_image` <a name="reset_docker_image" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDockerImage"></a>

```python
def reset_docker_image() -> None
```

##### `reset_driver` <a name="reset_driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriver"></a>

```python
def reset_driver() -> None
```

##### `reset_driver_instance_pool_id` <a name="reset_driver_instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverInstancePoolId"></a>

```python
def reset_driver_instance_pool_id() -> None
```

##### `reset_driver_node_type_id` <a name="reset_driver_node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetDriverNodeTypeId"></a>

```python
def reset_driver_node_type_id() -> None
```

##### `reset_enable_elastic_disk` <a name="reset_enable_elastic_disk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableElasticDisk"></a>

```python
def reset_enable_elastic_disk() -> None
```

##### `reset_enable_local_disk_encryption` <a name="reset_enable_local_disk_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetEnableLocalDiskEncryption"></a>

```python
def reset_enable_local_disk_encryption() -> None
```

##### `reset_executors` <a name="reset_executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetExecutors"></a>

```python
def reset_executors() -> None
```

##### `reset_gcp_attributes` <a name="reset_gcp_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetGcpAttributes"></a>

```python
def reset_gcp_attributes() -> None
```

##### `reset_init_scripts` <a name="reset_init_scripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInitScripts"></a>

```python
def reset_init_scripts() -> None
```

##### `reset_instance_pool_id` <a name="reset_instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetInstancePoolId"></a>

```python
def reset_instance_pool_id() -> None
```

##### `reset_jdbc_port` <a name="reset_jdbc_port" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetJdbcPort"></a>

```python
def reset_jdbc_port() -> None
```

##### `reset_last_activity_time` <a name="reset_last_activity_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastActivityTime"></a>

```python
def reset_last_activity_time() -> None
```

##### `reset_last_state_loss_time` <a name="reset_last_state_loss_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetLastStateLossTime"></a>

```python
def reset_last_state_loss_time() -> None
```

##### `reset_node_type_id` <a name="reset_node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNodeTypeId"></a>

```python
def reset_node_type_id() -> None
```

##### `reset_num_workers` <a name="reset_num_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetNumWorkers"></a>

```python
def reset_num_workers() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_runtime_engine` <a name="reset_runtime_engine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetRuntimeEngine"></a>

```python
def reset_runtime_engine() -> None
```

##### `reset_single_user_name` <a name="reset_single_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSingleUserName"></a>

```python
def reset_single_user_name() -> None
```

##### `reset_spark_conf` <a name="reset_spark_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkConf"></a>

```python
def reset_spark_conf() -> None
```

##### `reset_spark_context_id` <a name="reset_spark_context_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkContextId"></a>

```python
def reset_spark_context_id() -> None
```

##### `reset_spark_env_vars` <a name="reset_spark_env_vars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSparkEnvVars"></a>

```python
def reset_spark_env_vars() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_state_message` <a name="reset_state_message" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetStateMessage"></a>

```python
def reset_state_message() -> None
```

##### `reset_terminate_time` <a name="reset_terminate_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminateTime"></a>

```python
def reset_terminate_time() -> None
```

##### `reset_termination_reason` <a name="reset_termination_reason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.resetTerminationReason"></a>

```python
def reset_termination_reason() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference">DataDatabricksClusterClusterInfoAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference">DataDatabricksClusterClusterInfoAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference">DataDatabricksClusterClusterInfoAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference">DataDatabricksClusterClusterInfoClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatus">cluster_log_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference">DataDatabricksClusterClusterInfoClusterLogStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterSource">cluster_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImage">docker_image</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference">DataDatabricksClusterClusterInfoDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driver">driver</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference">DataDatabricksClusterClusterInfoDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executors">executors</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList">DataDatabricksClusterClusterInfoExecutorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference">DataDatabricksClusterClusterInfoGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScripts">init_scripts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList">DataDatabricksClusterClusterInfoInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReason">termination_reason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference">DataDatabricksClusterClusterInfoTerminationReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutesInput">autotermination_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributesInput">aws_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributesInput">azure_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCoresInput">cluster_cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConfInput">cluster_log_conf_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatusInput">cluster_log_status_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMbInput">cluster_memory_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserNameInput">creator_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityModeInput">data_security_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTagsInput">default_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImageInput">docker_image_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInput">driver_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolIdInput">driver_instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeIdInput">driver_node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDiskInput">enable_elastic_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryptionInput">enable_local_disk_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executorsInput">executors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributesInput">gcp_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScriptsInput">init_scripts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPortInput">jdbc_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTimeInput">last_activity_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTimeInput">last_state_loss_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkersInput">num_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngineInput">runtime_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserNameInput">single_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConfInput">spark_conf_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextIdInput">spark_context_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVarsInput">spark_env_vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersionInput">spark_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTimeInput">start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessageInput">state_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTimeInput">terminate_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReasonInput">termination_reason_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutes">autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCores">cluster_cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMb">cluster_memory_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserName">creator_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityMode">data_security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTags">default_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPort">jdbc_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTime">last_activity_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTime">last_state_loss_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngine">runtime_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserName">single_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextId">spark_context_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersion">spark_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTime">terminate_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscale"></a>

```python
autoscale: DataDatabricksClusterClusterInfoAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscaleOutputReference">DataDatabricksClusterClusterInfoAutoscaleOutputReference</a>

---

##### `aws_attributes`<sup>Required</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributes"></a>

```python
aws_attributes: DataDatabricksClusterClusterInfoAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributesOutputReference">DataDatabricksClusterClusterInfoAwsAttributesOutputReference</a>

---

##### `azure_attributes`<sup>Required</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributes"></a>

```python
azure_attributes: DataDatabricksClusterClusterInfoAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributesOutputReference">DataDatabricksClusterClusterInfoAzureAttributesOutputReference</a>

---

##### `cluster_log_conf`<sup>Required</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConf"></a>

```python
cluster_log_conf: DataDatabricksClusterClusterInfoClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConfOutputReference">DataDatabricksClusterClusterInfoClusterLogConfOutputReference</a>

---

##### `cluster_log_status`<sup>Required</sup> <a name="cluster_log_status" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatus"></a>

```python
cluster_log_status: DataDatabricksClusterClusterInfoClusterLogStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatusOutputReference">DataDatabricksClusterClusterInfoClusterLogStatusOutputReference</a>

---

##### `cluster_source`<sup>Required</sup> <a name="cluster_source" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterSource"></a>

```python
cluster_source: str
```

- *Type:* str

---

##### `docker_image`<sup>Required</sup> <a name="docker_image" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImage"></a>

```python
docker_image: DataDatabricksClusterClusterInfoDockerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImageOutputReference">DataDatabricksClusterClusterInfoDockerImageOutputReference</a>

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driver"></a>

```python
driver: DataDatabricksClusterClusterInfoDriverOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriverOutputReference">DataDatabricksClusterClusterInfoDriverOutputReference</a>

---

##### `executors`<sup>Required</sup> <a name="executors" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executors"></a>

```python
executors: DataDatabricksClusterClusterInfoExecutorsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutorsList">DataDatabricksClusterClusterInfoExecutorsList</a>

---

##### `gcp_attributes`<sup>Required</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributes"></a>

```python
gcp_attributes: DataDatabricksClusterClusterInfoGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributesOutputReference">DataDatabricksClusterClusterInfoGcpAttributesOutputReference</a>

---

##### `init_scripts`<sup>Required</sup> <a name="init_scripts" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScripts"></a>

```python
init_scripts: DataDatabricksClusterClusterInfoInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScriptsList">DataDatabricksClusterClusterInfoInitScriptsList</a>

---

##### `termination_reason`<sup>Required</sup> <a name="termination_reason" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReason"></a>

```python
termination_reason: DataDatabricksClusterClusterInfoTerminationReasonOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference">DataDatabricksClusterClusterInfoTerminationReasonOutputReference</a>

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoscaleInput"></a>

```python
autoscale_input: DataDatabricksClusterClusterInfoAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAutoscale">DataDatabricksClusterClusterInfoAutoscale</a>

---

##### `autotermination_minutes_input`<sup>Optional</sup> <a name="autotermination_minutes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutesInput"></a>

```python
autotermination_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_attributes_input`<sup>Optional</sup> <a name="aws_attributes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.awsAttributesInput"></a>

```python
aws_attributes_input: DataDatabricksClusterClusterInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAwsAttributes">DataDatabricksClusterClusterInfoAwsAttributes</a>

---

##### `azure_attributes_input`<sup>Optional</sup> <a name="azure_attributes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.azureAttributesInput"></a>

```python
azure_attributes_input: DataDatabricksClusterClusterInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoAzureAttributes">DataDatabricksClusterClusterInfoAzureAttributes</a>

---

##### `cluster_cores_input`<sup>Optional</sup> <a name="cluster_cores_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCoresInput"></a>

```python
cluster_cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_log_conf_input`<sup>Optional</sup> <a name="cluster_log_conf_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogConfInput"></a>

```python
cluster_log_conf_input: DataDatabricksClusterClusterInfoClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogConf">DataDatabricksClusterClusterInfoClusterLogConf</a>

---

##### `cluster_log_status_input`<sup>Optional</sup> <a name="cluster_log_status_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterLogStatusInput"></a>

```python
cluster_log_status_input: DataDatabricksClusterClusterInfoClusterLogStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoClusterLogStatus">DataDatabricksClusterClusterInfoClusterLogStatus</a>

---

##### `cluster_memory_mb_input`<sup>Optional</sup> <a name="cluster_memory_mb_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMbInput"></a>

```python
cluster_memory_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `creator_user_name_input`<sup>Optional</sup> <a name="creator_user_name_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserNameInput"></a>

```python
creator_user_name_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_security_mode_input`<sup>Optional</sup> <a name="data_security_mode_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityModeInput"></a>

```python
data_security_mode_input: str
```

- *Type:* str

---

##### `default_tags_input`<sup>Optional</sup> <a name="default_tags_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTagsInput"></a>

```python
default_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `docker_image_input`<sup>Optional</sup> <a name="docker_image_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dockerImageInput"></a>

```python
docker_image_input: DataDatabricksClusterClusterInfoDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDockerImage">DataDatabricksClusterClusterInfoDockerImage</a>

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInput"></a>

```python
driver_input: DataDatabricksClusterClusterInfoDriver
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoDriver">DataDatabricksClusterClusterInfoDriver</a>

---

##### `driver_instance_pool_id_input`<sup>Optional</sup> <a name="driver_instance_pool_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolIdInput"></a>

```python
driver_instance_pool_id_input: str
```

- *Type:* str

---

##### `driver_node_type_id_input`<sup>Optional</sup> <a name="driver_node_type_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeIdInput"></a>

```python
driver_node_type_id_input: str
```

- *Type:* str

---

##### `enable_elastic_disk_input`<sup>Optional</sup> <a name="enable_elastic_disk_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDiskInput"></a>

```python
enable_elastic_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_local_disk_encryption_input`<sup>Optional</sup> <a name="enable_local_disk_encryption_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryptionInput"></a>

```python
enable_local_disk_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `executors_input`<sup>Optional</sup> <a name="executors_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.executorsInput"></a>

```python
executors_input: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoExecutors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoExecutors">DataDatabricksClusterClusterInfoExecutors</a>]]

---

##### `gcp_attributes_input`<sup>Optional</sup> <a name="gcp_attributes_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.gcpAttributesInput"></a>

```python
gcp_attributes_input: DataDatabricksClusterClusterInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoGcpAttributes">DataDatabricksClusterClusterInfoGcpAttributes</a>

---

##### `init_scripts_input`<sup>Optional</sup> <a name="init_scripts_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.initScriptsInput"></a>

```python
init_scripts_input: typing.Union[IResolvable, typing.List[DataDatabricksClusterClusterInfoInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoInitScripts">DataDatabricksClusterClusterInfoInitScripts</a>]]

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `jdbc_port_input`<sup>Optional</sup> <a name="jdbc_port_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPortInput"></a>

```python
jdbc_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_activity_time_input`<sup>Optional</sup> <a name="last_activity_time_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTimeInput"></a>

```python
last_activity_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_state_loss_time_input`<sup>Optional</sup> <a name="last_state_loss_time_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTimeInput"></a>

```python
last_state_loss_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `num_workers_input`<sup>Optional</sup> <a name="num_workers_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkersInput"></a>

```python
num_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `runtime_engine_input`<sup>Optional</sup> <a name="runtime_engine_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngineInput"></a>

```python
runtime_engine_input: str
```

- *Type:* str

---

##### `single_user_name_input`<sup>Optional</sup> <a name="single_user_name_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserNameInput"></a>

```python
single_user_name_input: str
```

- *Type:* str

---

##### `spark_conf_input`<sup>Optional</sup> <a name="spark_conf_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConfInput"></a>

```python
spark_conf_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_context_id_input`<sup>Optional</sup> <a name="spark_context_id_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextIdInput"></a>

```python
spark_context_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_env_vars_input`<sup>Optional</sup> <a name="spark_env_vars_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVarsInput"></a>

```python
spark_env_vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_version_input`<sup>Optional</sup> <a name="spark_version_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersionInput"></a>

```python
spark_version_input: str
```

- *Type:* str

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTimeInput"></a>

```python
start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state_message_input`<sup>Optional</sup> <a name="state_message_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessageInput"></a>

```python
state_message_input: str
```

- *Type:* str

---

##### `terminate_time_input`<sup>Optional</sup> <a name="terminate_time_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTimeInput"></a>

```python
terminate_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `termination_reason_input`<sup>Optional</sup> <a name="termination_reason_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminationReasonInput"></a>

```python
termination_reason_input: DataDatabricksClusterClusterInfoTerminationReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

---

##### `autotermination_minutes`<sup>Required</sup> <a name="autotermination_minutes" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.autoterminationMinutes"></a>

```python
autotermination_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_cores`<sup>Required</sup> <a name="cluster_cores" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterCores"></a>

```python
cluster_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_memory_mb`<sup>Required</sup> <a name="cluster_memory_mb" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterMemoryMb"></a>

```python
cluster_memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `creator_user_name`<sup>Required</sup> <a name="creator_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.creatorUserName"></a>

```python
creator_user_name: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_security_mode`<sup>Required</sup> <a name="data_security_mode" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.dataSecurityMode"></a>

```python
data_security_mode: str
```

- *Type:* str

---

##### `default_tags`<sup>Required</sup> <a name="default_tags" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.defaultTags"></a>

```python
default_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_instance_pool_id`<sup>Required</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverInstancePoolId"></a>

```python
driver_instance_pool_id: str
```

- *Type:* str

---

##### `driver_node_type_id`<sup>Required</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.driverNodeTypeId"></a>

```python
driver_node_type_id: str
```

- *Type:* str

---

##### `enable_elastic_disk`<sup>Required</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableElasticDisk"></a>

```python
enable_elastic_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_local_disk_encryption`<sup>Required</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.enableLocalDiskEncryption"></a>

```python
enable_local_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `jdbc_port`<sup>Required</sup> <a name="jdbc_port" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.jdbcPort"></a>

```python
jdbc_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_activity_time`<sup>Required</sup> <a name="last_activity_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastActivityTime"></a>

```python
last_activity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_state_loss_time`<sup>Required</sup> <a name="last_state_loss_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.lastStateLossTime"></a>

```python
last_state_loss_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `num_workers`<sup>Required</sup> <a name="num_workers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `runtime_engine`<sup>Required</sup> <a name="runtime_engine" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.runtimeEngine"></a>

```python
runtime_engine: str
```

- *Type:* str

---

##### `single_user_name`<sup>Required</sup> <a name="single_user_name" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.singleUserName"></a>

```python
single_user_name: str
```

- *Type:* str

---

##### `spark_conf`<sup>Required</sup> <a name="spark_conf" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkConf"></a>

```python
spark_conf: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_context_id`<sup>Required</sup> <a name="spark_context_id" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkContextId"></a>

```python
spark_context_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_env_vars`<sup>Required</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkEnvVars"></a>

```python
spark_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `terminate_time`<sup>Required</sup> <a name="terminate_time" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.terminateTime"></a>

```python
terminate_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfo">DataDatabricksClusterClusterInfo</a>

---


### DataDatabricksClusterClusterInfoTerminationReasonOutputReference <a name="DataDatabricksClusterClusterInfoTerminationReasonOutputReference" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_cluster

dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReasonOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClusterClusterInfoTerminationReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCluster.DataDatabricksClusterClusterInfoTerminationReason">DataDatabricksClusterClusterInfoTerminationReason</a>

---



