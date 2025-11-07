# `permissionAssignment` Submodule <a name="`permissionAssignment` Submodule" id="@cdktf/provider-databricks.permissionAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PermissionAssignment <a name="PermissionAssignment" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment databricks_permission_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  permissions: typing.List[str],
  group_name: str = None,
  id: str = None,
  principal_id: typing.Union[int, float] = None,
  provider_config: PermissionAssignmentProviderConfig = None,
  service_principal_name: str = None,
  user_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#permissions PermissionAssignment#permissions}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#group_name PermissionAssignment#group_name}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#id PermissionAssignment#id}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#principal_id PermissionAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#service_principal_name PermissionAssignment#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#user_name PermissionAssignment#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#permissions PermissionAssignment#permissions}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#group_name PermissionAssignment#group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#id PermissionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.principalId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#principal_id PermissionAssignment#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#provider_config PermissionAssignment#provider_config}

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.servicePrincipalName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#service_principal_name PermissionAssignment#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#user_name PermissionAssignment#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetPrincipalId">reset_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetServicePrincipalName">reset_service_principal_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#workspace_id PermissionAssignment#workspace_id}.

---

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_id` <a name="reset_principal_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetPrincipalId"></a>

```python
def reset_principal_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_service_principal_name` <a name="reset_service_principal_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetServicePrincipalName"></a>

```python
def reset_service_principal_name() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.resetUserName"></a>

```python
def reset_user_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PermissionAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PermissionAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PermissionAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PermissionAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PermissionAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference">PermissionAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.principalIdInput">principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.servicePrincipalNameInput">service_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.providerConfig"></a>

```python
provider_config: PermissionAssignmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference">PermissionAssignmentProviderConfigOutputReference</a>

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.principalIdInput"></a>

```python
principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.providerConfigInput"></a>

```python
provider_config_input: PermissionAssignmentProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a>

---

##### `service_principal_name_input`<sup>Optional</sup> <a name="service_principal_name_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.servicePrincipalNameInput"></a>

```python
service_principal_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PermissionAssignmentConfig <a name="PermissionAssignmentConfig" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  permissions: typing.List[str],
  group_name: str = None,
  id: str = None,
  principal_id: typing.Union[int, float] = None,
  provider_config: PermissionAssignmentProviderConfig = None,
  service_principal_name: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#permissions PermissionAssignment#permissions}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#group_name PermissionAssignment#group_name}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#id PermissionAssignment#id}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#principal_id PermissionAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#service_principal_name PermissionAssignment#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#user_name PermissionAssignment#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#permissions PermissionAssignment#permissions}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#group_name PermissionAssignment#group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#id PermissionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#principal_id PermissionAssignment#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.providerConfig"></a>

```python
provider_config: PermissionAssignmentProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#provider_config PermissionAssignment#provider_config}

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#service_principal_name PermissionAssignment#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#user_name PermissionAssignment#user_name}.

---

### PermissionAssignmentProviderConfig <a name="PermissionAssignmentProviderConfig" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignmentProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#workspace_id PermissionAssignment#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/permission_assignment#workspace_id PermissionAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PermissionAssignmentProviderConfigOutputReference <a name="PermissionAssignmentProviderConfigOutputReference" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import permission_assignment

permissionAssignment.PermissionAssignmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: PermissionAssignmentProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.permissionAssignment.PermissionAssignmentProviderConfig">PermissionAssignmentProviderConfig</a>

---



