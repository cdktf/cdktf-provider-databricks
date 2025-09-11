# `dataDatabricksCleanRoomAutoApprovalRule` Submodule <a name="`dataDatabricksCleanRoomAutoApprovalRule` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAutoApprovalRule <a name="DataDatabricksCleanRoomAutoApprovalRule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rule

dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  author_collaborator_alias: str = None,
  author_scope: str = None,
  clean_room_name: str = None,
  runner_collaborator_alias: str = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorCollaboratorAlias">author_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorScope">author_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.runnerCollaboratorAlias">runner_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#workspace_id DataDatabricksCleanRoomAutoApprovalRule#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `author_collaborator_alias`<sup>Optional</sup> <a name="author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorCollaboratorAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `author_scope`<sup>Optional</sup> <a name="author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.cleanRoomName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}.

---

##### `runner_collaborator_alias`<sup>Optional</sup> <a name="runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.runnerCollaboratorAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#workspace_id DataDatabricksCleanRoomAutoApprovalRule#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias">reset_author_collaborator_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorScope">reset_author_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetCleanRoomName">reset_clean_room_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias">reset_runner_collaborator_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_author_collaborator_alias` <a name="reset_author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias"></a>

```python
def reset_author_collaborator_alias() -> None
```

##### `reset_author_scope` <a name="reset_author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorScope"></a>

```python
def reset_author_scope() -> None
```

##### `reset_clean_room_name` <a name="reset_clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetCleanRoomName"></a>

```python
def reset_clean_room_name() -> None
```

##### `reset_runner_collaborator_alias` <a name="reset_runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias"></a>

```python
def reset_runner_collaborator_alias() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rule

dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rule

dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rule

dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rule

dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCleanRoomAutoApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias">rule_owner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput">author_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScopeInput">author_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomNameInput">clean_room_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput">runner_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAlias">author_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScope">author_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAlias">runner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `rule_owner_collaborator_alias`<sup>Required</sup> <a name="rule_owner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias"></a>

```python
rule_owner_collaborator_alias: str
```

- *Type:* str

---

##### `author_collaborator_alias_input`<sup>Optional</sup> <a name="author_collaborator_alias_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput"></a>

```python
author_collaborator_alias_input: str
```

- *Type:* str

---

##### `author_scope_input`<sup>Optional</sup> <a name="author_scope_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScopeInput"></a>

```python
author_scope_input: str
```

- *Type:* str

---

##### `clean_room_name_input`<sup>Optional</sup> <a name="clean_room_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomNameInput"></a>

```python
clean_room_name_input: str
```

- *Type:* str

---

##### `runner_collaborator_alias_input`<sup>Optional</sup> <a name="runner_collaborator_alias_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput"></a>

```python
runner_collaborator_alias_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `author_collaborator_alias`<sup>Required</sup> <a name="author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAlias"></a>

```python
author_collaborator_alias: str
```

- *Type:* str

---

##### `author_scope`<sup>Required</sup> <a name="author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScope"></a>

```python
author_scope: str
```

- *Type:* str

---

##### `clean_room_name`<sup>Required</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

---

##### `runner_collaborator_alias`<sup>Required</sup> <a name="runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAlias"></a>

```python
runner_collaborator_alias: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAutoApprovalRuleConfig <a name="DataDatabricksCleanRoomAutoApprovalRuleConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rule

dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  author_collaborator_alias: str = None,
  author_scope: str = None,
  clean_room_name: str = None,
  runner_collaborator_alias: str = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias">author_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorScope">author_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias">runner_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#workspace_id DataDatabricksCleanRoomAutoApprovalRule#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `author_collaborator_alias`<sup>Optional</sup> <a name="author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias"></a>

```python
author_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `author_scope`<sup>Optional</sup> <a name="author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorScope"></a>

```python
author_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}.

---

##### `runner_collaborator_alias`<sup>Optional</sup> <a name="runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias"></a>

```python
runner_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rule#workspace_id DataDatabricksCleanRoomAutoApprovalRule#workspace_id}.

---



