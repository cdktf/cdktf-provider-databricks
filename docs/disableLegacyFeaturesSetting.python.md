# `disableLegacyFeaturesSetting` Submodule <a name="`disableLegacyFeaturesSetting` Submodule" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyFeaturesSetting <a name="DisableLegacyFeaturesSetting" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting databricks_disable_legacy_features_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disable_legacy_features: DisableLegacyFeaturesSettingDisableLegacyFeatures,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.disableLegacyFeatures">disable_legacy_features</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | disable_legacy_features block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disable_legacy_features`<sup>Required</sup> <a name="disable_legacy_features" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.disableLegacyFeatures"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

disable_legacy_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#disable_legacy_features DisableLegacyFeaturesSetting#disable_legacy_features}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.settingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures">put_disable_legacy_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName">reset_setting_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_disable_legacy_features` <a name="put_disable_legacy_features" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures"></a>

```python
def put_disable_legacy_features(
  value: typing.Union[bool, IResolvable]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures.parameter.value"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting_name` <a name="reset_setting_name" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName"></a>

```python
def reset_setting_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DisableLegacyFeaturesSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DisableLegacyFeaturesSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DisableLegacyFeaturesSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DisableLegacyFeaturesSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisableLegacyFeaturesSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures">disable_legacy_features</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput">disable_legacy_features_input</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disable_legacy_features`<sup>Required</sup> <a name="disable_legacy_features" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures"></a>

```python
disable_legacy_features: DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a>

---

##### `disable_legacy_features_input`<sup>Optional</sup> <a name="disable_legacy_features_input" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput"></a>

```python
disable_legacy_features_input: DisableLegacyFeaturesSettingDisableLegacyFeatures
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyFeaturesSettingConfig <a name="DisableLegacyFeaturesSettingConfig" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disable_legacy_features: DisableLegacyFeaturesSettingDisableLegacyFeatures,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures">disable_legacy_features</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | disable_legacy_features block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disable_legacy_features`<sup>Required</sup> <a name="disable_legacy_features" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures"></a>

```python
disable_legacy_features: DisableLegacyFeaturesSettingDisableLegacyFeatures
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

disable_legacy_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#disable_legacy_features DisableLegacyFeaturesSetting#disable_legacy_features}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}.

---

### DisableLegacyFeaturesSettingDisableLegacyFeatures <a name="DisableLegacyFeaturesSettingDisableLegacyFeatures" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures(
  value: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value">value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value"></a>

```python
value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference <a name="DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import disable_legacy_features_setting

disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value">value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value"></a>

```python
value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DisableLegacyFeaturesSettingDisableLegacyFeatures
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---



