# `azureAdlsGen1Mount` Submodule <a name="`azureAdlsGen1Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen1Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen1Mount <a name="AzureAdlsGen1Mount" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount databricks_azure_adls_gen1_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import azure_adls_gen1_mount

azureAdlsGen1Mount.AzureAdlsGen1Mount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret_key: str,
  client_secret_scope: str,
  mount_name: str,
  storage_resource_name: str,
  tenant_id: str,
  cluster_id: str = None,
  directory: str = None,
  id: str = None,
  spark_conf_prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretKey">client_secret_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretScope">client_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.mountName">mount_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.storageResourceName">storage_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.sparkConfPrefix">spark_conf_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `client_secret_key`<sup>Required</sup> <a name="client_secret_key" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `client_secret_scope`<sup>Required</sup> <a name="client_secret_scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.mountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `storage_resource_name`<sup>Required</sup> <a name="storage_resource_name" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.storageResourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.directory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spark_conf_prefix`<sup>Optional</sup> <a name="spark_conf_prefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.sparkConfPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix">reset_spark_conf_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spark_conf_prefix` <a name="reset_spark_conf_prefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix"></a>

```python
def reset_spark_conf_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzureAdlsGen1Mount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import azure_adls_gen1_mount

azureAdlsGen1Mount.AzureAdlsGen1Mount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import azure_adls_gen1_mount

azureAdlsGen1Mount.AzureAdlsGen1Mount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import azure_adls_gen1_mount

azureAdlsGen1Mount.AzureAdlsGen1Mount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import azure_adls_gen1_mount

azureAdlsGen1Mount.AzureAdlsGen1Mount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzureAdlsGen1Mount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzureAdlsGen1Mount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzureAdlsGen1Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureAdlsGen1Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput">client_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput">client_secret_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput">mount_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput">spark_conf_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput">storage_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey">client_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope">client_secret_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName">mount_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix">spark_conf_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName">storage_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_key_input`<sup>Optional</sup> <a name="client_secret_key_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput"></a>

```python
client_secret_key_input: str
```

- *Type:* str

---

##### `client_secret_scope_input`<sup>Optional</sup> <a name="client_secret_scope_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput"></a>

```python
client_secret_scope_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_name_input`<sup>Optional</sup> <a name="mount_name_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput"></a>

```python
mount_name_input: str
```

- *Type:* str

---

##### `spark_conf_prefix_input`<sup>Optional</sup> <a name="spark_conf_prefix_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput"></a>

```python
spark_conf_prefix_input: str
```

- *Type:* str

---

##### `storage_resource_name_input`<sup>Optional</sup> <a name="storage_resource_name_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput"></a>

```python
storage_resource_name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_key`<sup>Required</sup> <a name="client_secret_key" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey"></a>

```python
client_secret_key: str
```

- *Type:* str

---

##### `client_secret_scope`<sup>Required</sup> <a name="client_secret_scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope"></a>

```python
client_secret_scope: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName"></a>

```python
mount_name: str
```

- *Type:* str

---

##### `spark_conf_prefix`<sup>Required</sup> <a name="spark_conf_prefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix"></a>

```python
spark_conf_prefix: str
```

- *Type:* str

---

##### `storage_resource_name`<sup>Required</sup> <a name="storage_resource_name" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName"></a>

```python
storage_resource_name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen1MountConfig <a name="AzureAdlsGen1MountConfig" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import azure_adls_gen1_mount

azureAdlsGen1Mount.AzureAdlsGen1MountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret_key: str,
  client_secret_scope: str,
  mount_name: str,
  storage_resource_name: str,
  tenant_id: str,
  cluster_id: str = None,
  directory: str = None,
  id: str = None,
  spark_conf_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey">client_secret_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope">client_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName">mount_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName">storage_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix">spark_conf_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `client_secret_key`<sup>Required</sup> <a name="client_secret_key" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey"></a>

```python
client_secret_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `client_secret_scope`<sup>Required</sup> <a name="client_secret_scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope"></a>

```python
client_secret_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName"></a>

```python
mount_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `storage_resource_name`<sup>Required</sup> <a name="storage_resource_name" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName"></a>

```python
storage_resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory"></a>

```python
directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spark_conf_prefix`<sup>Optional</sup> <a name="spark_conf_prefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix"></a>

```python
spark_conf_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---



