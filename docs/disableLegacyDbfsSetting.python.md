# `disableLegacyDbfsSetting` Submodule <a name="`disableLegacyDbfsSetting` Submodule" id="@cdktf/provider-databricks.disableLegacyDbfsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyDbfsSetting <a name="DisableLegacyDbfsSetting" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting databricks_disable_legacy_dbfs_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  disable_legacy_dbfs: DisableLegacyDbfsSettingDisableLegacyDbfs,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.disableLegacyDbfs">disable_legacy_dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | disable_legacy_dbfs block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `disable_legacy_dbfs`<sup>Required</sup> <a name="disable_legacy_dbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.disableLegacyDbfs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

disable_legacy_dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#disable_legacy_dbfs DisableLegacyDbfsSetting#disable_legacy_dbfs}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.settingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs">put_disable_legacy_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetSettingName">reset_setting_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_disable_legacy_dbfs` <a name="put_disable_legacy_dbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs"></a>

```python
def put_disable_legacy_dbfs(
  value: bool | IResolvable
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs.parameter.value"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting_name` <a name="reset_setting_name" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetSettingName"></a>

```python
def reset_setting_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DisableLegacyDbfsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DisableLegacyDbfsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DisableLegacyDbfsSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DisableLegacyDbfsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisableLegacyDbfsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfs">disable_legacy_dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference">DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfsInput">disable_legacy_dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `disable_legacy_dbfs`<sup>Required</sup> <a name="disable_legacy_dbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfs"></a>

```python
disable_legacy_dbfs: DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference">DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference</a>

---

##### `disable_legacy_dbfs_input`<sup>Optional</sup> <a name="disable_legacy_dbfs_input" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfsInput"></a>

```python
disable_legacy_dbfs_input: DisableLegacyDbfsSettingDisableLegacyDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyDbfsSettingConfig <a name="DisableLegacyDbfsSettingConfig" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  disable_legacy_dbfs: DisableLegacyDbfsSettingDisableLegacyDbfs,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.disableLegacyDbfs">disable_legacy_dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | disable_legacy_dbfs block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `disable_legacy_dbfs`<sup>Required</sup> <a name="disable_legacy_dbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.disableLegacyDbfs"></a>

```python
disable_legacy_dbfs: DisableLegacyDbfsSettingDisableLegacyDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

disable_legacy_dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#disable_legacy_dbfs DisableLegacyDbfsSetting#disable_legacy_dbfs}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}.

---

### DisableLegacyDbfsSettingDisableLegacyDbfs <a name="DisableLegacyDbfsSettingDisableLegacyDbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs(
  value: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference <a name="DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_dbfs_setting

disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.internalValue"></a>

```python
internal_value: DisableLegacyDbfsSettingDisableLegacyDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---



