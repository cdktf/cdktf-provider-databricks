# `dataDatabricksVolume` Submodule <a name="`dataDatabricksVolume` Submodule" id="@cdktf/provider-databricks.dataDatabricksVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksVolume <a name="DataDatabricksVolume" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume databricks_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  volume_info: DataDatabricksVolumeVolumeInfo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#id DataDatabricksVolume#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.volumeInfo">volume_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | volume_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#id DataDatabricksVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `volume_info`<sup>Optional</sup> <a name="volume_info" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.volumeInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

volume_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_info DataDatabricksVolume#volume_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo">put_volume_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetVolumeInfo">reset_volume_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_volume_info` <a name="put_volume_info" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo"></a>

```python
def put_volume_info(
  access_point: str = None,
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetails = None,
  full_name: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  schema_name: str = None,
  storage_location: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  volume_id: str = None,
  volume_type: str = None
) -> None
```

###### `access_point`<sup>Optional</sup> <a name="access_point" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.accessPoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#access_point DataDatabricksVolume#access_point}.

---

###### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.browseOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#browse_only DataDatabricksVolume#browse_only}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#catalog_name DataDatabricksVolume#catalog_name}.

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#comment DataDatabricksVolume#comment}.

---

###### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.createdAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#created_at DataDatabricksVolume#created_at}.

---

###### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#created_by DataDatabricksVolume#created_by}.

---

###### `encryption_details`<sup>Optional</sup> <a name="encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.encryptionDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#encryption_details DataDatabricksVolume#encryption_details}

---

###### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#full_name DataDatabricksVolume#full_name}.

---

###### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#metastore_id DataDatabricksVolume#metastore_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#owner DataDatabricksVolume#owner}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#schema_name DataDatabricksVolume#schema_name}.

---

###### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.storageLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#storage_location DataDatabricksVolume#storage_location}.

---

###### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.updatedAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#updated_at DataDatabricksVolume#updated_at}.

---

###### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.updatedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#updated_by DataDatabricksVolume#updated_by}.

---

###### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_id DataDatabricksVolume#volume_id}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_type DataDatabricksVolume#volume_type}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_volume_info` <a name="reset_volume_info" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetVolumeInfo"></a>

```python
def reset_volume_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolume.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfo">volume_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference">DataDatabricksVolumeVolumeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfoInput">volume_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `volume_info`<sup>Required</sup> <a name="volume_info" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfo"></a>

```python
volume_info: DataDatabricksVolumeVolumeInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference">DataDatabricksVolumeVolumeInfoOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `volume_info_input`<sup>Optional</sup> <a name="volume_info_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfoInput"></a>

```python
volume_info_input: DataDatabricksVolumeVolumeInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksVolumeConfig <a name="DataDatabricksVolumeConfig" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  volume_info: DataDatabricksVolumeVolumeInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#id DataDatabricksVolume#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.volumeInfo">volume_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | volume_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#id DataDatabricksVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `volume_info`<sup>Optional</sup> <a name="volume_info" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.volumeInfo"></a>

```python
volume_info: DataDatabricksVolumeVolumeInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

volume_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_info DataDatabricksVolume#volume_info}

---

### DataDatabricksVolumeVolumeInfo <a name="DataDatabricksVolumeVolumeInfo" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeVolumeInfo(
  access_point: str = None,
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetails = None,
  full_name: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  schema_name: str = None,
  storage_location: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  volume_id: str = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.accessPoint">access_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#access_point DataDatabricksVolume#access_point}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#browse_only DataDatabricksVolume#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#catalog_name DataDatabricksVolume#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#comment DataDatabricksVolume#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#created_at DataDatabricksVolume#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#created_by DataDatabricksVolume#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#full_name DataDatabricksVolume#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#metastore_id DataDatabricksVolume#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#owner DataDatabricksVolume#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#schema_name DataDatabricksVolume#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#storage_location DataDatabricksVolume#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#updated_at DataDatabricksVolume#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#updated_by DataDatabricksVolume#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_id DataDatabricksVolume#volume_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_type DataDatabricksVolume#volume_type}. |

---

##### `access_point`<sup>Optional</sup> <a name="access_point" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.accessPoint"></a>

```python
access_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#access_point DataDatabricksVolume#access_point}.

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#browse_only DataDatabricksVolume#browse_only}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#catalog_name DataDatabricksVolume#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#comment DataDatabricksVolume#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#created_at DataDatabricksVolume#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#created_by DataDatabricksVolume#created_by}.

---

##### `encryption_details`<sup>Optional</sup> <a name="encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.encryptionDetails"></a>

```python
encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#encryption_details DataDatabricksVolume#encryption_details}

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#full_name DataDatabricksVolume#full_name}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#metastore_id DataDatabricksVolume#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#name DataDatabricksVolume#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#owner DataDatabricksVolume#owner}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#schema_name DataDatabricksVolume#schema_name}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#storage_location DataDatabricksVolume#storage_location}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#updated_at DataDatabricksVolume#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#updated_by DataDatabricksVolume#updated_by}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_id DataDatabricksVolume#volume_id}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#volume_type DataDatabricksVolume#volume_type}.

---

### DataDatabricksVolumeVolumeInfoEncryptionDetails <a name="DataDatabricksVolumeVolumeInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails(
  sse_encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails.property.sseEncryptionDetails">sse_encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sse_encryption_details`<sup>Optional</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```python
sse_encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#sse_encryption_details DataDatabricksVolume#sse_encryption_details}

---

### DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails(
  algorithm: str = None,
  aws_kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#algorithm DataDatabricksVolume#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#aws_kms_key_arn DataDatabricksVolume#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#algorithm DataDatabricksVolume#algorithm}.

---

##### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#aws_kms_key_arn DataDatabricksVolume#aws_kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference <a name="DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">put_sse_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">reset_sse_encryption_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sse_encryption_details` <a name="put_sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```python
def put_sse_encryption_details(
  algorithm: str = None,
  aws_kms_key_arn: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#algorithm DataDatabricksVolume#algorithm}.

---

###### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.awsKmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#aws_kms_key_arn DataDatabricksVolume#aws_kms_key_arn}.

---

##### `reset_sse_encryption_details` <a name="reset_sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```python
def reset_sse_encryption_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">sse_encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sse_encryption_details_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sse_encryption_details`<sup>Required</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```python
sse_encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sse_encryption_details_input`<sup>Optional</sup> <a name="sse_encryption_details_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```python
sse_encryption_details_input: DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksVolumeVolumeInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

---


### DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">reset_aws_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_aws_kms_key_arn` <a name="reset_aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```python
def reset_aws_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">aws_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `aws_kms_key_arn_input`<sup>Optional</sup> <a name="aws_kms_key_arn_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```python
aws_kms_key_arn_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `aws_kms_key_arn`<sup>Required</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksVolumeVolumeInfoOutputReference <a name="DataDatabricksVolumeVolumeInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_volume

dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.putEncryptionDetails">put_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetAccessPoint">reset_access_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetEncryptionDetails">reset_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_details` <a name="put_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.putEncryptionDetails"></a>

```python
def put_encryption_details(
  sse_encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails = None
) -> None
```

###### `sse_encryption_details`<sup>Optional</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.putEncryptionDetails.parameter.sseEncryptionDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/volume#sse_encryption_details DataDatabricksVolume#sse_encryption_details}

---

##### `reset_access_point` <a name="reset_access_point" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetAccessPoint"></a>

```python
def reset_access_point() -> None
```

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_encryption_details` <a name="reset_encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetEncryptionDetails"></a>

```python
def reset_encryption_details() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPointInput">access_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetailsInput">encryption_details_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPoint">access_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_details`<sup>Required</sup> <a name="encryption_details" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetails"></a>

```python
encryption_details: DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference</a>

---

##### `access_point_input`<sup>Optional</sup> <a name="access_point_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPointInput"></a>

```python
access_point_input: str
```

- *Type:* str

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `encryption_details_input`<sup>Optional</sup> <a name="encryption_details_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetailsInput"></a>

```python
encryption_details_input: DataDatabricksVolumeVolumeInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `access_point`<sup>Required</sup> <a name="access_point" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPoint"></a>

```python
access_point: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksVolumeVolumeInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

---



