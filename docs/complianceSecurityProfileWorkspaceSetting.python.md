# `complianceSecurityProfileWorkspaceSetting` Submodule <a name="`complianceSecurityProfileWorkspaceSetting` Submodule" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceSecurityProfileWorkspaceSetting <a name="ComplianceSecurityProfileWorkspaceSetting" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting databricks_compliance_security_profile_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_security_profile_workspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.complianceSecurityProfileWorkspace">compliance_security_profile_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | compliance_security_profile_workspace block. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_security_profile_workspace`<sup>Required</sup> <a name="compliance_security_profile_workspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.complianceSecurityProfileWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

compliance_security_profile_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#compliance_security_profile_workspace ComplianceSecurityProfileWorkspaceSetting#compliance_security_profile_workspace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.settingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace">put_compliance_security_profile_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName">reset_setting_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compliance_security_profile_workspace` <a name="put_compliance_security_profile_workspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace"></a>

```python
def put_compliance_security_profile_workspace(
  compliance_standards: typing.List[str] = None,
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `compliance_standards`<sup>Optional</sup> <a name="compliance_standards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace.parameter.complianceStandards"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}.

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting_name` <a name="reset_setting_name" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName"></a>

```python
def reset_setting_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComplianceSecurityProfileWorkspaceSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComplianceSecurityProfileWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceSecurityProfileWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace">compliance_security_profile_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput">compliance_security_profile_workspace_input</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_security_profile_workspace`<sup>Required</sup> <a name="compliance_security_profile_workspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace"></a>

```python
compliance_security_profile_workspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a>

---

##### `compliance_security_profile_workspace_input`<sup>Optional</sup> <a name="compliance_security_profile_workspace_input" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput"></a>

```python
compliance_security_profile_workspace_input: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace(
  compliance_standards: typing.List[str] = None,
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards">compliance_standards</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}. |

---

##### `compliance_standards`<sup>Optional</sup> <a name="compliance_standards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards"></a>

```python
compliance_standards: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}.

---

### ComplianceSecurityProfileWorkspaceSettingConfig <a name="ComplianceSecurityProfileWorkspaceSettingConfig" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_security_profile_workspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace">compliance_security_profile_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | compliance_security_profile_workspace block. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_security_profile_workspace`<sup>Required</sup> <a name="compliance_security_profile_workspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace"></a>

```python
compliance_security_profile_workspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

compliance_security_profile_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#compliance_security_profile_workspace ComplianceSecurityProfileWorkspaceSetting#compliance_security_profile_workspace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import compliance_security_profile_workspace_setting

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetComplianceStandards">reset_compliance_standards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compliance_standards` <a name="reset_compliance_standards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetComplianceStandards"></a>

```python
def reset_compliance_standards() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput">compliance_standards_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards">compliance_standards</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compliance_standards_input`<sup>Optional</sup> <a name="compliance_standards_input" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput"></a>

```python
compliance_standards_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compliance_standards`<sup>Required</sup> <a name="compliance_standards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards"></a>

```python
compliance_standards: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---



