# `instancePool` Submodule <a name="`instancePool` Submodule" id="@cdktf/provider-databricks.instancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstancePool <a name="InstancePool" id="@cdktf/provider-databricks.instancePool.InstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool databricks_instance_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idle_instance_autotermination_minutes: typing.Union[int, float],
  instance_pool_name: str,
  aws_attributes: InstancePoolAwsAttributes = None,
  azure_attributes: InstancePoolAzureAttributes = None,
  custom_tags: typing.Mapping[str] = None,
  disk_spec: InstancePoolDiskSpec = None,
  enable_elastic_disk: typing.Union[bool, IResolvable] = None,
  gcp_attributes: InstancePoolGcpAttributes = None,
  id: str = None,
  instance_pool_fleet_attributes: InstancePoolInstancePoolFleetAttributes = None,
  instance_pool_id: str = None,
  max_capacity: typing.Union[int, float] = None,
  min_idle_instances: typing.Union[int, float] = None,
  node_type_id: str = None,
  preloaded_docker_image: typing.Union[IResolvable, typing.List[InstancePoolPreloadedDockerImage]] = None,
  preloaded_spark_versions: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.idleInstanceAutoterminationMinutes">idle_instance_autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolName">instance_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.diskSpec">disk_spec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#id InstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolFleetAttributes">instance_pool_fleet_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedDockerImage">preloaded_docker_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]</code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedSparkVersions">preloaded_spark_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idle_instance_autotermination_minutes`<sup>Required</sup> <a name="idle_instance_autotermination_minutes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.idleInstanceAutoterminationMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}.

---

##### `instance_pool_name`<sup>Required</sup> <a name="instance_pool_name" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}.

---

##### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.awsAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}

---

##### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.azureAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}.

---

##### `disk_spec`<sup>Optional</sup> <a name="disk_spec" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.diskSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}

---

##### `enable_elastic_disk`<sup>Optional</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.enableElasticDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}.

---

##### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.gcpAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#id InstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_pool_fleet_attributes`<sup>Optional</sup> <a name="instance_pool_fleet_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolFleetAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}.

---

##### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.minIdleInstances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}.

---

##### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.nodeTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}.

---

##### `preloaded_docker_image`<sup>Optional</sup> <a name="preloaded_docker_image" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedDockerImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}

---

##### `preloaded_spark_versions`<sup>Optional</sup> <a name="preloaded_spark_versions" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedSparkVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes">put_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes">put_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec">put_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes">put_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes">put_instance_pool_fleet_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage">put_preloaded_docker_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetAwsAttributes">reset_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetAzureAttributes">reset_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetDiskSpec">reset_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk">reset_enable_elastic_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetGcpAttributes">reset_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes">reset_instance_pool_fleet_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolId">reset_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetMinIdleInstances">reset_min_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetNodeTypeId">reset_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage">reset_preloaded_docker_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions">reset_preloaded_spark_versions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.instancePool.InstancePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.instancePool.InstancePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.instancePool.InstancePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.instancePool.InstancePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_attributes` <a name="put_aws_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes"></a>

```python
def put_aws_attributes(
  availability: str = None,
  spot_bid_price_percent: typing.Union[int, float] = None,
  zone_id: str = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

###### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes.parameter.spotBidPricePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

##### `put_azure_attributes` <a name="put_azure_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes"></a>

```python
def put_azure_attributes(
  availability: str = None,
  spot_bid_max_price: typing.Union[int, float] = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

###### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes.parameter.spotBidMaxPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}.

---

##### `put_disk_spec` <a name="put_disk_spec" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec"></a>

```python
def put_disk_spec(
  disk_count: typing.Union[int, float] = None,
  disk_size: typing.Union[int, float] = None,
  disk_type: InstancePoolDiskSpecDiskType = None
) -> None
```

###### `disk_count`<sup>Optional</sup> <a name="disk_count" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec.parameter.diskCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}.

---

###### `disk_size`<sup>Optional</sup> <a name="disk_size" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec.parameter.diskSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}.

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec.parameter.diskType"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_type InstancePool#disk_type}

---

##### `put_gcp_attributes` <a name="put_gcp_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes"></a>

```python
def put_gcp_attributes(
  gcp_availability: str = None,
  local_ssd_count: typing.Union[int, float] = None,
  zone_id: str = None
) -> None
```

###### `gcp_availability`<sup>Optional</sup> <a name="gcp_availability" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes.parameter.gcpAvailability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}.

---

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

##### `put_instance_pool_fleet_attributes` <a name="put_instance_pool_fleet_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes"></a>

```python
def put_instance_pool_fleet_attributes(
  launch_template_override: typing.Union[IResolvable, typing.List[InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]],
  fleet_on_demand_option: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption = None,
  fleet_spot_option: InstancePoolInstancePoolFleetAttributesFleetSpotOption = None
) -> None
```

###### `launch_template_override`<sup>Required</sup> <a name="launch_template_override" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes.parameter.launchTemplateOverride"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#launch_template_override InstancePool#launch_template_override}

---

###### `fleet_on_demand_option`<sup>Optional</sup> <a name="fleet_on_demand_option" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes.parameter.fleetOnDemandOption"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#fleet_on_demand_option InstancePool#fleet_on_demand_option}

---

###### `fleet_spot_option`<sup>Optional</sup> <a name="fleet_spot_option" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes.parameter.fleetSpotOption"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#fleet_spot_option InstancePool#fleet_spot_option}

---

##### `put_preloaded_docker_image` <a name="put_preloaded_docker_image" id="@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage"></a>

```python
def put_preloaded_docker_image(
  value: typing.Union[IResolvable, typing.List[InstancePoolPreloadedDockerImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]

---

##### `reset_aws_attributes` <a name="reset_aws_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetAwsAttributes"></a>

```python
def reset_aws_attributes() -> None
```

##### `reset_azure_attributes` <a name="reset_azure_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetAzureAttributes"></a>

```python
def reset_azure_attributes() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.instancePool.InstancePool.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_disk_spec` <a name="reset_disk_spec" id="@cdktf/provider-databricks.instancePool.InstancePool.resetDiskSpec"></a>

```python
def reset_disk_spec() -> None
```

##### `reset_enable_elastic_disk` <a name="reset_enable_elastic_disk" id="@cdktf/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk"></a>

```python
def reset_enable_elastic_disk() -> None
```

##### `reset_gcp_attributes` <a name="reset_gcp_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetGcpAttributes"></a>

```python
def reset_gcp_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.instancePool.InstancePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_pool_fleet_attributes` <a name="reset_instance_pool_fleet_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes"></a>

```python
def reset_instance_pool_fleet_attributes() -> None
```

##### `reset_instance_pool_id` <a name="reset_instance_pool_id" id="@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolId"></a>

```python
def reset_instance_pool_id() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-databricks.instancePool.InstancePool.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_idle_instances` <a name="reset_min_idle_instances" id="@cdktf/provider-databricks.instancePool.InstancePool.resetMinIdleInstances"></a>

```python
def reset_min_idle_instances() -> None
```

##### `reset_node_type_id` <a name="reset_node_type_id" id="@cdktf/provider-databricks.instancePool.InstancePool.resetNodeTypeId"></a>

```python
def reset_node_type_id() -> None
```

##### `reset_preloaded_docker_image` <a name="reset_preloaded_docker_image" id="@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage"></a>

```python
def reset_preloaded_docker_image() -> None
```

##### `reset_preloaded_spark_versions` <a name="reset_preloaded_spark_versions" id="@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions"></a>

```python
def reset_preloaded_spark_versions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.instancePool.InstancePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.instancePool.InstancePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the InstancePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing InstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpec">disk_spec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes">instance_pool_fleet_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage">preloaded_docker_image</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributesInput">aws_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributesInput">azure_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpecInput">disk_spec_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput">enable_elastic_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput">gcp_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput">idle_instance_autotermination_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput">instance_pool_fleet_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput">instance_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput">min_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput">preloaded_docker_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput">preloaded_spark_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes">idle_instance_autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolName">instance_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions">preloaded_spark_versions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.instancePool.InstancePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.instancePool.InstancePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.instancePool.InstancePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.instancePool.InstancePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.instancePool.InstancePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.instancePool.InstancePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.instancePool.InstancePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_attributes`<sup>Required</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributes"></a>

```python
aws_attributes: InstancePoolAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a>

---

##### `azure_attributes`<sup>Required</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributes"></a>

```python
azure_attributes: InstancePoolAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a>

---

##### `disk_spec`<sup>Required</sup> <a name="disk_spec" id="@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpec"></a>

```python
disk_spec: InstancePoolDiskSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a>

---

##### `gcp_attributes`<sup>Required</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributes"></a>

```python
gcp_attributes: InstancePoolGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a>

---

##### `instance_pool_fleet_attributes`<sup>Required</sup> <a name="instance_pool_fleet_attributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes"></a>

```python
instance_pool_fleet_attributes: InstancePoolInstancePoolFleetAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a>

---

##### `preloaded_docker_image`<sup>Required</sup> <a name="preloaded_docker_image" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage"></a>

```python
preloaded_docker_image: InstancePoolPreloadedDockerImageList
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a>

---

##### `aws_attributes_input`<sup>Optional</sup> <a name="aws_attributes_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributesInput"></a>

```python
aws_attributes_input: InstancePoolAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `azure_attributes_input`<sup>Optional</sup> <a name="azure_attributes_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributesInput"></a>

```python
azure_attributes_input: InstancePoolAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disk_spec_input`<sup>Optional</sup> <a name="disk_spec_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpecInput"></a>

```python
disk_spec_input: InstancePoolDiskSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `enable_elastic_disk_input`<sup>Optional</sup> <a name="enable_elastic_disk_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput"></a>

```python
enable_elastic_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_attributes_input`<sup>Optional</sup> <a name="gcp_attributes_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput"></a>

```python
gcp_attributes_input: InstancePoolGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_instance_autotermination_minutes_input`<sup>Optional</sup> <a name="idle_instance_autotermination_minutes_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput"></a>

```python
idle_instance_autotermination_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_pool_fleet_attributes_input`<sup>Optional</sup> <a name="instance_pool_fleet_attributes_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput"></a>

```python
instance_pool_fleet_attributes_input: InstancePoolInstancePoolFleetAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `instance_pool_name_input`<sup>Optional</sup> <a name="instance_pool_name_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput"></a>

```python
instance_pool_name_input: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_idle_instances_input`<sup>Optional</sup> <a name="min_idle_instances_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput"></a>

```python
min_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `preloaded_docker_image_input`<sup>Optional</sup> <a name="preloaded_docker_image_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput"></a>

```python
preloaded_docker_image_input: typing.Union[IResolvable, typing.List[InstancePoolPreloadedDockerImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]

---

##### `preloaded_spark_versions_input`<sup>Optional</sup> <a name="preloaded_spark_versions_input" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput"></a>

```python
preloaded_spark_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.instancePool.InstancePool.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enable_elastic_disk`<sup>Required</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDisk"></a>

```python
enable_elastic_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_instance_autotermination_minutes`<sup>Required</sup> <a name="idle_instance_autotermination_minutes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes"></a>

```python
idle_instance_autotermination_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `instance_pool_name`<sup>Required</sup> <a name="instance_pool_name" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolName"></a>

```python
instance_pool_name: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_idle_instances`<sup>Required</sup> <a name="min_idle_instances" id="@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `preloaded_spark_versions`<sup>Required</sup> <a name="preloaded_spark_versions" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions"></a>

```python
preloaded_spark_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.instancePool.InstancePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InstancePoolAwsAttributes <a name="InstancePoolAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolAwsAttributes(
  availability: str = None,
  spot_bid_price_percent: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolAzureAttributes <a name="InstancePoolAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolAzureAttributes(
  availability: str = None,
  spot_bid_max_price: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}.

---

### InstancePoolConfig <a name="InstancePoolConfig" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idle_instance_autotermination_minutes: typing.Union[int, float],
  instance_pool_name: str,
  aws_attributes: InstancePoolAwsAttributes = None,
  azure_attributes: InstancePoolAzureAttributes = None,
  custom_tags: typing.Mapping[str] = None,
  disk_spec: InstancePoolDiskSpec = None,
  enable_elastic_disk: typing.Union[bool, IResolvable] = None,
  gcp_attributes: InstancePoolGcpAttributes = None,
  id: str = None,
  instance_pool_fleet_attributes: InstancePoolInstancePoolFleetAttributes = None,
  instance_pool_id: str = None,
  max_capacity: typing.Union[int, float] = None,
  min_idle_instances: typing.Union[int, float] = None,
  node_type_id: str = None,
  preloaded_docker_image: typing.Union[IResolvable, typing.List[InstancePoolPreloadedDockerImage]] = None,
  preloaded_spark_versions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes">idle_instance_autotermination_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName">instance_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec">disk_spec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk">enable_elastic_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#id InstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes">instance_pool_fleet_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage">preloaded_docker_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]</code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions">preloaded_spark_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idle_instance_autotermination_minutes`<sup>Required</sup> <a name="idle_instance_autotermination_minutes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes"></a>

```python
idle_instance_autotermination_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}.

---

##### `instance_pool_name`<sup>Required</sup> <a name="instance_pool_name" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName"></a>

```python
instance_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}.

---

##### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes"></a>

```python
aws_attributes: InstancePoolAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}

---

##### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes"></a>

```python
azure_attributes: InstancePoolAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}.

---

##### `disk_spec`<sup>Optional</sup> <a name="disk_spec" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec"></a>

```python
disk_spec: InstancePoolDiskSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}

---

##### `enable_elastic_disk`<sup>Optional</sup> <a name="enable_elastic_disk" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk"></a>

```python
enable_elastic_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}.

---

##### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes"></a>

```python
gcp_attributes: InstancePoolGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#id InstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_pool_fleet_attributes`<sup>Optional</sup> <a name="instance_pool_fleet_attributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes"></a>

```python
instance_pool_fleet_attributes: InstancePoolInstancePoolFleetAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}.

---

##### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}.

---

##### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}.

---

##### `preloaded_docker_image`<sup>Optional</sup> <a name="preloaded_docker_image" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage"></a>

```python
preloaded_docker_image: typing.Union[IResolvable, typing.List[InstancePoolPreloadedDockerImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}

---

##### `preloaded_spark_versions`<sup>Optional</sup> <a name="preloaded_spark_versions" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions"></a>

```python
preloaded_spark_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}.

---

### InstancePoolDiskSpec <a name="InstancePoolDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolDiskSpec(
  disk_count: typing.Union[int, float] = None,
  disk_size: typing.Union[int, float] = None,
  disk_type: InstancePoolDiskSpecDiskType = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount">disk_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType">disk_type</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | disk_type block. |

---

##### `disk_count`<sup>Optional</sup> <a name="disk_count" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount"></a>

```python
disk_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}.

---

##### `disk_size`<sup>Optional</sup> <a name="disk_size" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}.

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType"></a>

```python
disk_type: InstancePoolDiskSpecDiskType
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#disk_type InstancePool#disk_type}

---

### InstancePoolDiskSpecDiskType <a name="InstancePoolDiskSpecDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolDiskSpecDiskType(
  azure_disk_volume_type: str = None,
  ebs_volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType">azure_disk_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}. |

---

##### `azure_disk_volume_type`<sup>Optional</sup> <a name="azure_disk_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType"></a>

```python
azure_disk_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}.

---

##### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}.

---

### InstancePoolGcpAttributes <a name="InstancePoolGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolGcpAttributes(
  gcp_availability: str = None,
  local_ssd_count: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability">gcp_availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `gcp_availability`<sup>Optional</sup> <a name="gcp_availability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability"></a>

```python
gcp_availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}.

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolInstancePoolFleetAttributes <a name="InstancePoolInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributes(
  launch_template_override: typing.Union[IResolvable, typing.List[InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]],
  fleet_on_demand_option: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption = None,
  fleet_spot_option: InstancePoolInstancePoolFleetAttributesFleetSpotOption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride">launch_template_override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]</code> | launch_template_override block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption">fleet_on_demand_option</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | fleet_on_demand_option block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption">fleet_spot_option</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | fleet_spot_option block. |

---

##### `launch_template_override`<sup>Required</sup> <a name="launch_template_override" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride"></a>

```python
launch_template_override: typing.Union[IResolvable, typing.List[InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#launch_template_override InstancePool#launch_template_override}

---

##### `fleet_on_demand_option`<sup>Optional</sup> <a name="fleet_on_demand_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption"></a>

```python
fleet_on_demand_option: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#fleet_on_demand_option InstancePool#fleet_on_demand_option}

---

##### `fleet_spot_option`<sup>Optional</sup> <a name="fleet_spot_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption"></a>

```python
fleet_spot_option: InstancePoolInstancePoolFleetAttributesFleetSpotOption
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#fleet_spot_option InstancePool#fleet_spot_option}

---

### InstancePoolInstancePoolFleetAttributesFleetOnDemandOption <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption(
  allocation_strategy: str,
  instance_pools_to_use_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesFleetSpotOption <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption(
  allocation_strategy: str,
  instance_pools_to_use_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride(
  availability_zone: str,
  instance_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}. |

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}.

---

### InstancePoolPreloadedDockerImage <a name="InstancePoolPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolPreloadedDockerImage(
  url: str,
  basic_auth: InstancePoolPreloadedDockerImageBasicAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#url InstancePool#url}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#url InstancePool#url}.

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth"></a>

```python
basic_auth: InstancePoolPreloadedDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#basic_auth InstancePool#basic_auth}

---

### InstancePoolPreloadedDockerImageBasicAuth <a name="InstancePoolPreloadedDockerImageBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolPreloadedDockerImageBasicAuth(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#password InstancePool#password}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#username InstancePool#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#password InstancePool#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#username InstancePool#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstancePoolAwsAttributesOutputReference <a name="InstancePoolAwsAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolAwsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent">reset_spot_bid_price_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_spot_bid_price_percent` <a name="reset_spot_bid_price_percent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```python
def reset_spot_bid_price_percent() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput">spot_bid_price_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `spot_bid_price_percent_input`<sup>Optional</sup> <a name="spot_bid_price_percent_input" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```python
spot_bid_price_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `spot_bid_price_percent`<sup>Required</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---


### InstancePoolAzureAttributesOutputReference <a name="InstancePoolAzureAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolAzureAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice">reset_spot_bid_max_price</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_spot_bid_max_price` <a name="reset_spot_bid_max_price" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```python
def reset_spot_bid_max_price() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput">spot_bid_max_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `spot_bid_max_price_input`<sup>Optional</sup> <a name="spot_bid_max_price_input" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```python
spot_bid_max_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `spot_bid_max_price`<sup>Required</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---


### InstancePoolDiskSpecDiskTypeOutputReference <a name="InstancePoolDiskSpecDiskTypeOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolDiskSpecDiskTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType">reset_azure_disk_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType">reset_ebs_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_disk_volume_type` <a name="reset_azure_disk_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType"></a>

```python
def reset_azure_disk_volume_type() -> None
```

##### `reset_ebs_volume_type` <a name="reset_ebs_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType"></a>

```python
def reset_ebs_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput">azure_disk_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput">ebs_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType">azure_disk_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_disk_volume_type_input`<sup>Optional</sup> <a name="azure_disk_volume_type_input" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput"></a>

```python
azure_disk_volume_type_input: str
```

- *Type:* str

---

##### `ebs_volume_type_input`<sup>Optional</sup> <a name="ebs_volume_type_input" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput"></a>

```python
ebs_volume_type_input: str
```

- *Type:* str

---

##### `azure_disk_volume_type`<sup>Required</sup> <a name="azure_disk_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType"></a>

```python
azure_disk_volume_type: str
```

- *Type:* str

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolDiskSpecDiskType
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---


### InstancePoolDiskSpecOutputReference <a name="InstancePoolDiskSpecOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolDiskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType">put_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount">reset_disk_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize">reset_disk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disk_type` <a name="put_disk_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType"></a>

```python
def put_disk_type(
  azure_disk_volume_type: str = None,
  ebs_volume_type: str = None
) -> None
```

###### `azure_disk_volume_type`<sup>Optional</sup> <a name="azure_disk_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType.parameter.azureDiskVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}.

---

###### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType.parameter.ebsVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}.

---

##### `reset_disk_count` <a name="reset_disk_count" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount"></a>

```python
def reset_disk_count() -> None
```

##### `reset_disk_size` <a name="reset_disk_size" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize"></a>

```python
def reset_disk_size() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType">disk_type</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput">disk_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput">disk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount">disk_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType"></a>

```python
disk_type: InstancePoolDiskSpecDiskTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a>

---

##### `disk_count_input`<sup>Optional</sup> <a name="disk_count_input" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput"></a>

```python
disk_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size_input`<sup>Optional</sup> <a name="disk_size_input" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput"></a>

```python
disk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: InstancePoolDiskSpecDiskType
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `disk_count`<sup>Required</sup> <a name="disk_count" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount"></a>

```python
disk_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size`<sup>Required</sup> <a name="disk_size" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolDiskSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---


### InstancePoolGcpAttributesOutputReference <a name="InstancePoolGcpAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolGcpAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability">reset_gcp_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcp_availability` <a name="reset_gcp_availability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability"></a>

```python
def reset_gcp_availability() -> None
```

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput">gcp_availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability">gcp_availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_availability_input`<sup>Optional</sup> <a name="gcp_availability_input" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput"></a>

```python
gcp_availability_input: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `gcp_availability`<sup>Required</sup> <a name="gcp_availability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability"></a>

```python
gcp_availability: str
```

- *Type:* str

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---


### InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount">reset_instance_pools_to_use_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_pools_to_use_count` <a name="reset_instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount"></a>

```python
def reset_instance_pools_to_use_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput">instance_pools_to_use_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `instance_pools_to_use_count_input`<sup>Optional</sup> <a name="instance_pools_to_use_count_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```python
instance_pools_to_use_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `instance_pools_to_use_count`<sup>Required</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---


### InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount">reset_instance_pools_to_use_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_pools_to_use_count` <a name="reset_instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount"></a>

```python
def reset_instance_pools_to_use_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput">instance_pools_to_use_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `instance_pools_to_use_count_input`<sup>Optional</sup> <a name="instance_pools_to_use_count_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```python
instance_pools_to_use_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `instance_pools_to_use_count`<sup>Required</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolInstancePoolFleetAttributesFleetSpotOption
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]

---


### InstancePoolInstancePoolFleetAttributesOutputReference <a name="InstancePoolInstancePoolFleetAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolInstancePoolFleetAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption">put_fleet_on_demand_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption">put_fleet_spot_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride">put_launch_template_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption">reset_fleet_on_demand_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption">reset_fleet_spot_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fleet_on_demand_option` <a name="put_fleet_on_demand_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption"></a>

```python
def put_fleet_on_demand_option(
  allocation_strategy: str,
  instance_pools_to_use_count: typing.Union[int, float] = None
) -> None
```

###### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

###### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.instancePoolsToUseCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

##### `put_fleet_spot_option` <a name="put_fleet_spot_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption"></a>

```python
def put_fleet_spot_option(
  allocation_strategy: str,
  instance_pools_to_use_count: typing.Union[int, float] = None
) -> None
```

###### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

###### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.instancePoolsToUseCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

##### `put_launch_template_override` <a name="put_launch_template_override" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride"></a>

```python
def put_launch_template_override(
  value: typing.Union[IResolvable, typing.List[InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]

---

##### `reset_fleet_on_demand_option` <a name="reset_fleet_on_demand_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption"></a>

```python
def reset_fleet_on_demand_option() -> None
```

##### `reset_fleet_spot_option` <a name="reset_fleet_spot_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption"></a>

```python
def reset_fleet_spot_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption">fleet_on_demand_option</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption">fleet_spot_option</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride">launch_template_override</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput">fleet_on_demand_option_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput">fleet_spot_option_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput">launch_template_override_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fleet_on_demand_option`<sup>Required</sup> <a name="fleet_on_demand_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption"></a>

```python
fleet_on_demand_option: InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a>

---

##### `fleet_spot_option`<sup>Required</sup> <a name="fleet_spot_option" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption"></a>

```python
fleet_spot_option: InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a>

---

##### `launch_template_override`<sup>Required</sup> <a name="launch_template_override" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride"></a>

```python
launch_template_override: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a>

---

##### `fleet_on_demand_option_input`<sup>Optional</sup> <a name="fleet_on_demand_option_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput"></a>

```python
fleet_on_demand_option_input: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `fleet_spot_option_input`<sup>Optional</sup> <a name="fleet_spot_option_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput"></a>

```python
fleet_spot_option_input: InstancePoolInstancePoolFleetAttributesFleetSpotOption
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `launch_template_override_input`<sup>Optional</sup> <a name="launch_template_override_input" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput"></a>

```python
launch_template_override_input: typing.Union[IResolvable, typing.List[InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolInstancePoolFleetAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---


### InstancePoolPreloadedDockerImageBasicAuthOutputReference <a name="InstancePoolPreloadedDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: InstancePoolPreloadedDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---


### InstancePoolPreloadedDockerImageList <a name="InstancePoolPreloadedDockerImageList" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolPreloadedDockerImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InstancePoolPreloadedDockerImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InstancePoolPreloadedDockerImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]]

---


### InstancePoolPreloadedDockerImageOutputReference <a name="InstancePoolPreloadedDockerImageOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import instance_pool

instancePool.InstancePoolPreloadedDockerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth"></a>

```python
def put_basic_auth(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#password InstancePool#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/instance_pool#username InstancePool#username}.

---

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput">basic_auth_input</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth"></a>

```python
basic_auth: InstancePoolPreloadedDockerImageBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a>

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput"></a>

```python
basic_auth_input: InstancePoolPreloadedDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, InstancePoolPreloadedDockerImage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>]

---



