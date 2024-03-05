# `azureBlobMount` Submodule <a name="`azureBlobMount` Submodule" id="@cdktf/provider-databricks.azureBlobMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureBlobMount <a name="AzureBlobMount" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount databricks_azure_blob_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import azure_blob_mount

azureBlobMount.AzureBlobMount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_type: str,
  container_name: str,
  mount_name: str,
  storage_account_name: str,
  token_secret_key: str,
  token_secret_scope: str,
  cluster_id: str = None,
  directory: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.mountName">mount_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretKey">token_secret_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretScope">token_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.mountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `token_secret_key`<sup>Required</sup> <a name="token_secret_key" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `token_secret_scope`<sup>Required</sup> <a name="token_secret_scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.directory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import azure_blob_mount

azureBlobMount.AzureBlobMount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import azure_blob_mount

azureBlobMount.AzureBlobMount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import azure_blob_mount

azureBlobMount.AzureBlobMount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import azure_blob_mount

azureBlobMount.AzureBlobMount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzureBlobMount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzureBlobMount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureBlobMount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput">mount_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput">token_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput">token_secret_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName">mount_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey">token_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope">token_secret_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_name_input`<sup>Optional</sup> <a name="mount_name_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput"></a>

```python
mount_name_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `token_secret_key_input`<sup>Optional</sup> <a name="token_secret_key_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput"></a>

```python
token_secret_key_input: str
```

- *Type:* str

---

##### `token_secret_scope_input`<sup>Optional</sup> <a name="token_secret_scope_input" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput"></a>

```python
token_secret_scope_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName"></a>

```python
mount_name: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `token_secret_key`<sup>Required</sup> <a name="token_secret_key" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey"></a>

```python
token_secret_key: str
```

- *Type:* str

---

##### `token_secret_scope`<sup>Required</sup> <a name="token_secret_scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope"></a>

```python
token_secret_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureBlobMountConfig <a name="AzureBlobMountConfig" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import azure_blob_mount

azureBlobMount.AzureBlobMountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_type: str,
  container_name: str,
  mount_name: str,
  storage_account_name: str,
  token_secret_key: str,
  token_secret_scope: str,
  cluster_id: str = None,
  directory: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName">mount_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey">token_secret_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope">token_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName"></a>

```python
mount_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `token_secret_key`<sup>Required</sup> <a name="token_secret_key" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey"></a>

```python
token_secret_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `token_secret_scope`<sup>Required</sup> <a name="token_secret_scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope"></a>

```python
token_secret_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory"></a>

```python
directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



