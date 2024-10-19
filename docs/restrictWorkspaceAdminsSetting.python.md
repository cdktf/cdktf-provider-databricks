# `restrictWorkspaceAdminsSetting` Submodule <a name="`restrictWorkspaceAdminsSetting` Submodule" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RestrictWorkspaceAdminsSetting <a name="RestrictWorkspaceAdminsSetting" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting databricks_restrict_workspace_admins_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  restrict_workspace_admins: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | restrict_workspace_admins block. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `restrict_workspace_admins`<sup>Required</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.restrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

restrict_workspace_admins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#restrict_workspace_admins RestrictWorkspaceAdminsSetting#restrict_workspace_admins}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.settingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins">put_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetSettingName">reset_setting_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_restrict_workspace_admins` <a name="put_restrict_workspace_admins" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins"></a>

```python
def put_restrict_workspace_admins(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting_name` <a name="reset_setting_name" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetSettingName"></a>

```python
def reset_setting_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RestrictWorkspaceAdminsSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RestrictWorkspaceAdminsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RestrictWorkspaceAdminsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdminsInput">restrict_workspace_admins_input</a></code> | <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `restrict_workspace_admins`<sup>Required</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdmins"></a>

```python
restrict_workspace_admins: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `restrict_workspace_admins_input`<sup>Optional</sup> <a name="restrict_workspace_admins_input" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdminsInput"></a>

```python
restrict_workspace_admins_input: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RestrictWorkspaceAdminsSettingConfig <a name="RestrictWorkspaceAdminsSettingConfig" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  restrict_workspace_admins: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | restrict_workspace_admins block. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `restrict_workspace_admins`<sup>Required</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.restrictWorkspaceAdmins"></a>

```python
restrict_workspace_admins: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

restrict_workspace_admins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#restrict_workspace_admins RestrictWorkspaceAdminsSetting#restrict_workspace_admins}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}.

---

### RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins <a name="RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference <a name="RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import restrict_workspace_admins_setting

restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```python
internal_value: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---



