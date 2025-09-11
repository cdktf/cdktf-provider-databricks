# `dataDatabricksExternalLocation` Submodule <a name="`dataDatabricksExternalLocation` Submodule" id="@cdktf/provider-databricks.dataDatabricksExternalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalLocation <a name="DataDatabricksExternalLocation" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocation(
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
  external_location_info: DataDatabricksExternalLocationExternalLocationInfo = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.externalLocationInfo">external_location_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | external_location_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}.

---

##### `external_location_info`<sup>Optional</sup> <a name="external_location_info" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.externalLocationInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

external_location_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#external_location_info DataDatabricksExternalLocation#external_location_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo">put_external_location_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetExternalLocationInfo">reset_external_location_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_external_location_info` <a name="put_external_location_info" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo"></a>

```python
def put_external_location_info(
  browse_only: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  credential_id: str = None,
  credential_name: str = None,
  enable_file_events: typing.Union[bool, IResolvable] = None,
  encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails = None,
  fallback: typing.Union[bool, IResolvable] = None,
  file_event_queue: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  url: str = None
) -> None
```

###### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.browseOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}.

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}.

---

###### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.createdAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}.

---

###### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}.

---

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}.

---

###### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}.

---

###### `enable_file_events`<sup>Optional</sup> <a name="enable_file_events" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.enableFileEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#enable_file_events DataDatabricksExternalLocation#enable_file_events}.

---

###### `encryption_details`<sup>Optional</sup> <a name="encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.encryptionDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#encryption_details DataDatabricksExternalLocation#encryption_details}

---

###### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.fallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}.

---

###### `file_event_queue`<sup>Optional</sup> <a name="file_event_queue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.fileEventQueue"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#file_event_queue DataDatabricksExternalLocation#file_event_queue}

---

###### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}.

---

###### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}.

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}.

---

###### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.updatedAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}.

---

###### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.updatedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}.

---

##### `reset_external_location_info` <a name="reset_external_location_info" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetExternalLocationInfo"></a>

```python
def reset_external_location_info() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksExternalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksExternalLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksExternalLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksExternalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfo">external_location_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference">DataDatabricksExternalLocationExternalLocationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfoInput">external_location_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_location_info`<sup>Required</sup> <a name="external_location_info" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfo"></a>

```python
external_location_info: DataDatabricksExternalLocationExternalLocationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference">DataDatabricksExternalLocationExternalLocationInfoOutputReference</a>

---

##### `external_location_info_input`<sup>Optional</sup> <a name="external_location_info_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfoInput"></a>

```python
external_location_info_input: DataDatabricksExternalLocationExternalLocationInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalLocationConfig <a name="DataDatabricksExternalLocationConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  external_location_info: DataDatabricksExternalLocationExternalLocationInfo = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.externalLocationInfo">external_location_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | external_location_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}.

---

##### `external_location_info`<sup>Optional</sup> <a name="external_location_info" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.externalLocationInfo"></a>

```python
external_location_info: DataDatabricksExternalLocationExternalLocationInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

external_location_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#external_location_info DataDatabricksExternalLocation#external_location_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksExternalLocationExternalLocationInfo <a name="DataDatabricksExternalLocationExternalLocationInfo" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo(
  browse_only: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  credential_id: str = None,
  credential_name: str = None,
  enable_file_events: typing.Union[bool, IResolvable] = None,
  encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails = None,
  fallback: typing.Union[bool, IResolvable] = None,
  file_event_queue: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.enableFileEvents">enable_file_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#enable_file_events DataDatabricksExternalLocation#enable_file_events}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fallback">fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fileEventQueue">file_event_queue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}. |

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}.

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}.

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}.

---

##### `enable_file_events`<sup>Optional</sup> <a name="enable_file_events" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.enableFileEvents"></a>

```python
enable_file_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#enable_file_events DataDatabricksExternalLocation#enable_file_events}.

---

##### `encryption_details`<sup>Optional</sup> <a name="encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.encryptionDetails"></a>

```python
encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#encryption_details DataDatabricksExternalLocation#encryption_details}

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fallback"></a>

```python
fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}.

---

##### `file_event_queue`<sup>Optional</sup> <a name="file_event_queue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fileEventQueue"></a>

```python
file_event_queue: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#file_event_queue DataDatabricksExternalLocation#file_event_queue}

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}.

---

### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails(
  sse_encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails.property.sseEncryptionDetails">sse_encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sse_encryption_details`<sup>Optional</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```python
sse_encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#sse_encryption_details DataDatabricksExternalLocation#sse_encryption_details}

---

### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails(
  algorithm: str = None,
  aws_kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}.

---

##### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueue <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue(
  managed_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs = None,
  managed_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub = None,
  managed_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs = None,
  provided_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs = None,
  provided_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub = None,
  provided_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedAqs">managed_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a></code> | managed_aqs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedPubsub">managed_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a></code> | managed_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedSqs">managed_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a></code> | managed_sqs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedAqs">provided_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a></code> | provided_aqs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedPubsub">provided_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a></code> | provided_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedSqs">provided_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a></code> | provided_sqs block. |

---

##### `managed_aqs`<sup>Optional</sup> <a name="managed_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedAqs"></a>

```python
managed_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_aqs DataDatabricksExternalLocation#managed_aqs}

---

##### `managed_pubsub`<sup>Optional</sup> <a name="managed_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedPubsub"></a>

```python
managed_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_pubsub DataDatabricksExternalLocation#managed_pubsub}

---

##### `managed_sqs`<sup>Optional</sup> <a name="managed_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedSqs"></a>

```python
managed_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_sqs DataDatabricksExternalLocation#managed_sqs}

---

##### `provided_aqs`<sup>Optional</sup> <a name="provided_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedAqs"></a>

```python
provided_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#provided_aqs DataDatabricksExternalLocation#provided_aqs}

---

##### `provided_pubsub`<sup>Optional</sup> <a name="provided_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedPubsub"></a>

```python
provided_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#provided_pubsub DataDatabricksExternalLocation#provided_pubsub}

---

##### `provided_sqs`<sup>Optional</sup> <a name="provided_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedSqs"></a>

```python
provided_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#provided_sqs DataDatabricksExternalLocation#provided_sqs}

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs(
  managed_resource_id: str = None,
  queue_url: str = None,
  resource_group: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}. |

---

##### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub(
  managed_resource_id: str = None,
  subscription_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.subscriptionName">subscription_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}. |

---

##### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs(
  managed_resource_id: str = None,
  queue_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |

---

##### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs(
  managed_resource_id: str = None,
  queue_url: str = None,
  resource_group: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}. |

---

##### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub(
  managed_resource_id: str = None,
  subscription_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.subscriptionName">subscription_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}. |

---

##### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs(
  managed_resource_id: str = None,
  queue_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |

---

##### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">put_sse_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">reset_sse_encryption_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sse_encryption_details` <a name="put_sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```python
def put_sse_encryption_details(
  algorithm: str = None,
  aws_kms_key_arn: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}.

---

###### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.awsKmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}.

---

##### `reset_sse_encryption_details` <a name="reset_sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```python
def reset_sse_encryption_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">sse_encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sse_encryption_details_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sse_encryption_details`<sup>Required</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```python
sse_encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sse_encryption_details_input`<sup>Optional</sup> <a name="sse_encryption_details_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```python
sse_encryption_details_input: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

---


### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">reset_aws_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_aws_kms_key_arn` <a name="reset_aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```python
def reset_aws_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">aws_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `aws_kms_key_arn_input`<sup>Optional</sup> <a name="aws_kms_key_arn_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```python
aws_kms_key_arn_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `aws_kms_key_arn`<sup>Required</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetManagedResourceId">reset_managed_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed_resource_id` <a name="reset_managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetManagedResourceId"></a>

```python
def reset_managed_resource_id() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceIdInput">managed_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id_input`<sup>Optional</sup> <a name="managed_resource_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceIdInput"></a>

```python
managed_resource_id_input: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetManagedResourceId">reset_managed_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetSubscriptionName">reset_subscription_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed_resource_id` <a name="reset_managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetManagedResourceId"></a>

```python
def reset_managed_resource_id() -> None
```

##### `reset_subscription_name` <a name="reset_subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetSubscriptionName"></a>

```python
def reset_subscription_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceIdInput">managed_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id_input`<sup>Optional</sup> <a name="managed_resource_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceIdInput"></a>

```python
managed_resource_id_input: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetManagedResourceId">reset_managed_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed_resource_id` <a name="reset_managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetManagedResourceId"></a>

```python
def reset_managed_resource_id() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceIdInput">managed_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id_input`<sup>Optional</sup> <a name="managed_resource_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceIdInput"></a>

```python
managed_resource_id_input: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs">put_managed_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub">put_managed_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs">put_managed_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs">put_provided_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub">put_provided_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs">put_provided_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedAqs">reset_managed_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedPubsub">reset_managed_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedSqs">reset_managed_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedAqs">reset_provided_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedPubsub">reset_provided_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedSqs">reset_provided_sqs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_aqs` <a name="put_managed_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs"></a>

```python
def put_managed_aqs(
  managed_resource_id: str = None,
  queue_url: str = None,
  resource_group: str = None,
  subscription_id: str = None
) -> None
```

###### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs.parameter.managedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}.

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}.

---

##### `put_managed_pubsub` <a name="put_managed_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub"></a>

```python
def put_managed_pubsub(
  managed_resource_id: str = None,
  subscription_name: str = None
) -> None
```

###### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub.parameter.managedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

###### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub.parameter.subscriptionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}.

---

##### `put_managed_sqs` <a name="put_managed_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs"></a>

```python
def put_managed_sqs(
  managed_resource_id: str = None,
  queue_url: str = None
) -> None
```

###### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs.parameter.managedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

##### `put_provided_aqs` <a name="put_provided_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs"></a>

```python
def put_provided_aqs(
  managed_resource_id: str = None,
  queue_url: str = None,
  resource_group: str = None,
  subscription_id: str = None
) -> None
```

###### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs.parameter.managedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}.

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}.

---

##### `put_provided_pubsub` <a name="put_provided_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub"></a>

```python
def put_provided_pubsub(
  managed_resource_id: str = None,
  subscription_name: str = None
) -> None
```

###### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub.parameter.managedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

###### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub.parameter.subscriptionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}.

---

##### `put_provided_sqs` <a name="put_provided_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs"></a>

```python
def put_provided_sqs(
  managed_resource_id: str = None,
  queue_url: str = None
) -> None
```

###### `managed_resource_id`<sup>Optional</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs.parameter.managedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

##### `reset_managed_aqs` <a name="reset_managed_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedAqs"></a>

```python
def reset_managed_aqs() -> None
```

##### `reset_managed_pubsub` <a name="reset_managed_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedPubsub"></a>

```python
def reset_managed_pubsub() -> None
```

##### `reset_managed_sqs` <a name="reset_managed_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedSqs"></a>

```python
def reset_managed_sqs() -> None
```

##### `reset_provided_aqs` <a name="reset_provided_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedAqs"></a>

```python
def reset_provided_aqs() -> None
```

##### `reset_provided_pubsub` <a name="reset_provided_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedPubsub"></a>

```python
def reset_provided_pubsub() -> None
```

##### `reset_provided_sqs` <a name="reset_provided_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedSqs"></a>

```python
def reset_provided_sqs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqs">managed_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsub">managed_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqs">managed_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqs">provided_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsub">provided_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqs">provided_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqsInput">managed_aqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsubInput">managed_pubsub_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqsInput">managed_sqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqsInput">provided_aqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsubInput">provided_pubsub_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqsInput">provided_sqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_aqs`<sup>Required</sup> <a name="managed_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqs"></a>

```python
managed_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference</a>

---

##### `managed_pubsub`<sup>Required</sup> <a name="managed_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsub"></a>

```python
managed_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference</a>

---

##### `managed_sqs`<sup>Required</sup> <a name="managed_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqs"></a>

```python
managed_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference</a>

---

##### `provided_aqs`<sup>Required</sup> <a name="provided_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqs"></a>

```python
provided_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference</a>

---

##### `provided_pubsub`<sup>Required</sup> <a name="provided_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsub"></a>

```python
provided_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference</a>

---

##### `provided_sqs`<sup>Required</sup> <a name="provided_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqs"></a>

```python
provided_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference</a>

---

##### `managed_aqs_input`<sup>Optional</sup> <a name="managed_aqs_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqsInput"></a>

```python
managed_aqs_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

---

##### `managed_pubsub_input`<sup>Optional</sup> <a name="managed_pubsub_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsubInput"></a>

```python
managed_pubsub_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

---

##### `managed_sqs_input`<sup>Optional</sup> <a name="managed_sqs_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqsInput"></a>

```python
managed_sqs_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

---

##### `provided_aqs_input`<sup>Optional</sup> <a name="provided_aqs_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqsInput"></a>

```python
provided_aqs_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

---

##### `provided_pubsub_input`<sup>Optional</sup> <a name="provided_pubsub_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsubInput"></a>

```python
provided_pubsub_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

---

##### `provided_sqs_input`<sup>Optional</sup> <a name="provided_sqs_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqsInput"></a>

```python
provided_sqs_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetManagedResourceId">reset_managed_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed_resource_id` <a name="reset_managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetManagedResourceId"></a>

```python
def reset_managed_resource_id() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceIdInput">managed_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id_input`<sup>Optional</sup> <a name="managed_resource_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceIdInput"></a>

```python
managed_resource_id_input: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetManagedResourceId">reset_managed_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetSubscriptionName">reset_subscription_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed_resource_id` <a name="reset_managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetManagedResourceId"></a>

```python
def reset_managed_resource_id() -> None
```

##### `reset_subscription_name` <a name="reset_subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetSubscriptionName"></a>

```python
def reset_subscription_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceIdInput">managed_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id_input`<sup>Optional</sup> <a name="managed_resource_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceIdInput"></a>

```python
managed_resource_id_input: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetManagedResourceId">reset_managed_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed_resource_id` <a name="reset_managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetManagedResourceId"></a>

```python
def reset_managed_resource_id() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceIdInput">managed_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id_input`<sup>Optional</sup> <a name="managed_resource_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceIdInput"></a>

```python
managed_resource_id_input: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_external_location

dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putEncryptionDetails">put_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue">put_file_event_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEnableFileEvents">reset_enable_file_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEncryptionDetails">reset_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFallback">reset_fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFileEventQueue">reset_file_event_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_details` <a name="put_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putEncryptionDetails"></a>

```python
def put_encryption_details(
  sse_encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails = None
) -> None
```

###### `sse_encryption_details`<sup>Optional</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putEncryptionDetails.parameter.sseEncryptionDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#sse_encryption_details DataDatabricksExternalLocation#sse_encryption_details}

---

##### `put_file_event_queue` <a name="put_file_event_queue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue"></a>

```python
def put_file_event_queue(
  managed_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs = None,
  managed_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub = None,
  managed_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs = None,
  provided_aqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs = None,
  provided_pubsub: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub = None,
  provided_sqs: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs = None
) -> None
```

###### `managed_aqs`<sup>Optional</sup> <a name="managed_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.managedAqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_aqs DataDatabricksExternalLocation#managed_aqs}

---

###### `managed_pubsub`<sup>Optional</sup> <a name="managed_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.managedPubsub"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_pubsub DataDatabricksExternalLocation#managed_pubsub}

---

###### `managed_sqs`<sup>Optional</sup> <a name="managed_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.managedSqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#managed_sqs DataDatabricksExternalLocation#managed_sqs}

---

###### `provided_aqs`<sup>Optional</sup> <a name="provided_aqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.providedAqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#provided_aqs DataDatabricksExternalLocation#provided_aqs}

---

###### `provided_pubsub`<sup>Optional</sup> <a name="provided_pubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.providedPubsub"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#provided_pubsub DataDatabricksExternalLocation#provided_pubsub}

---

###### `provided_sqs`<sup>Optional</sup> <a name="provided_sqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.providedSqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/external_location#provided_sqs DataDatabricksExternalLocation#provided_sqs}

---

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_enable_file_events` <a name="reset_enable_file_events" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEnableFileEvents"></a>

```python
def reset_enable_file_events() -> None
```

##### `reset_encryption_details` <a name="reset_encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEncryptionDetails"></a>

```python
def reset_encryption_details() -> None
```

##### `reset_fallback` <a name="reset_fallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFallback"></a>

```python
def reset_fallback() -> None
```

##### `reset_file_event_queue` <a name="reset_file_event_queue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFileEventQueue"></a>

```python
def reset_file_event_queue() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueue">file_event_queue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEventsInput">enable_file_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetailsInput">encryption_details_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallbackInput">fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueueInput">file_event_queue_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEvents">enable_file_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallback">fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_details`<sup>Required</sup> <a name="encryption_details" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetails"></a>

```python
encryption_details: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference</a>

---

##### `file_event_queue`<sup>Required</sup> <a name="file_event_queue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueue"></a>

```python
file_event_queue: DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference</a>

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `enable_file_events_input`<sup>Optional</sup> <a name="enable_file_events_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEventsInput"></a>

```python
enable_file_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_details_input`<sup>Optional</sup> <a name="encryption_details_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetailsInput"></a>

```python
encryption_details_input: DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

---

##### `fallback_input`<sup>Optional</sup> <a name="fallback_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallbackInput"></a>

```python
fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_event_queue_input`<sup>Optional</sup> <a name="file_event_queue_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueueInput"></a>

```python
file_event_queue_input: DataDatabricksExternalLocationExternalLocationInfoFileEventQueue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `enable_file_events`<sup>Required</sup> <a name="enable_file_events" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEvents"></a>

```python
enable_file_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallback"></a>

```python
fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksExternalLocationExternalLocationInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

---



