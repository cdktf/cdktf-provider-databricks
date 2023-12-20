# `entitlements` Submodule <a name="`entitlements` Submodule" id="@cdktf/provider-databricks.entitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Entitlements <a name="Entitlements" id="@cdktf/provider-databricks.entitlements.Entitlements"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements databricks_entitlements}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import entitlements

entitlements.Entitlements(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_cluster_create: typing.Union[bool, IResolvable] = None,
  allow_instance_pool_create: typing.Union[bool, IResolvable] = None,
  databricks_sql_access: typing.Union[bool, IResolvable] = None,
  group_id: str = None,
  id: str = None,
  service_principal_id: str = None,
  user_id: str = None,
  workspace_access: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#group_id Entitlements#group_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#id Entitlements#id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#user_id Entitlements#user_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowClusterCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#group_id Entitlements#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#id Entitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#user_id Entitlements#user_id}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.workspaceAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetAllowClusterCreate">reset_allow_cluster_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetAllowInstancePoolCreate">reset_allow_instance_pool_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetDatabricksSqlAccess">reset_databricks_sql_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetWorkspaceAccess">reset_workspace_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.entitlements.Entitlements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.entitlements.Entitlements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.entitlements.Entitlements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.entitlements.Entitlements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.entitlements.Entitlements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.entitlements.Entitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.entitlements.Entitlements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.entitlements.Entitlements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.entitlements.Entitlements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.entitlements.Entitlements.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.entitlements.Entitlements.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.entitlements.Entitlements.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.entitlements.Entitlements.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.entitlements.Entitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.entitlements.Entitlements.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.entitlements.Entitlements.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.entitlements.Entitlements.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.entitlements.Entitlements.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.entitlements.Entitlements.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_cluster_create` <a name="reset_allow_cluster_create" id="@cdktf/provider-databricks.entitlements.Entitlements.resetAllowClusterCreate"></a>

```python
def reset_allow_cluster_create() -> None
```

##### `reset_allow_instance_pool_create` <a name="reset_allow_instance_pool_create" id="@cdktf/provider-databricks.entitlements.Entitlements.resetAllowInstancePoolCreate"></a>

```python
def reset_allow_instance_pool_create() -> None
```

##### `reset_databricks_sql_access` <a name="reset_databricks_sql_access" id="@cdktf/provider-databricks.entitlements.Entitlements.resetDatabricksSqlAccess"></a>

```python
def reset_databricks_sql_access() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-databricks.entitlements.Entitlements.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.entitlements.Entitlements.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-databricks.entitlements.Entitlements.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-databricks.entitlements.Entitlements.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_workspace_access` <a name="reset_workspace_access" id="@cdktf/provider-databricks.entitlements.Entitlements.resetWorkspaceAccess"></a>

```python
def reset_workspace_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Entitlements resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.entitlements.Entitlements.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import entitlements

entitlements.Entitlements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.entitlements.Entitlements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import entitlements

entitlements.Entitlements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import entitlements

entitlements.Entitlements.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import entitlements

entitlements.Entitlements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Entitlements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Entitlements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Entitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Entitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreateInput">allow_cluster_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreateInput">allow_instance_pool_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccessInput">databricks_sql_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccessInput">workspace_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.entitlements.Entitlements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.entitlements.Entitlements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.entitlements.Entitlements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.entitlements.Entitlements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.entitlements.Entitlements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.entitlements.Entitlements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.entitlements.Entitlements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.entitlements.Entitlements.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.entitlements.Entitlements.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.entitlements.Entitlements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.entitlements.Entitlements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.entitlements.Entitlements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.entitlements.Entitlements.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_cluster_create_input`<sup>Optional</sup> <a name="allow_cluster_create_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreateInput"></a>

```python
allow_cluster_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_instance_pool_create_input`<sup>Optional</sup> <a name="allow_instance_pool_create_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreateInput"></a>

```python
allow_instance_pool_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `databricks_sql_access_input`<sup>Optional</sup> <a name="databricks_sql_access_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccessInput"></a>

```python
databricks_sql_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `workspace_access_input`<sup>Optional</sup> <a name="workspace_access_input" id="@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccessInput"></a>

```python
workspace_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_cluster_create`<sup>Required</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreate"></a>

```python
allow_cluster_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_instance_pool_create`<sup>Required</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `databricks_sql_access`<sup>Required</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccess"></a>

```python
databricks_sql_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-databricks.entitlements.Entitlements.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-databricks.entitlements.Entitlements.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `workspace_access`<sup>Required</sup> <a name="workspace_access" id="@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.entitlements.Entitlements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntitlementsConfig <a name="EntitlementsConfig" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import entitlements

entitlements.EntitlementsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_cluster_create: typing.Union[bool, IResolvable] = None,
  allow_instance_pool_create: typing.Union[bool, IResolvable] = None,
  databricks_sql_access: typing.Union[bool, IResolvable] = None,
  group_id: str = None,
  id: str = None,
  service_principal_id: str = None,
  user_id: str = None,
  workspace_access: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowClusterCreate">allow_cluster_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#group_id Entitlements#group_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#id Entitlements#id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#user_id Entitlements#user_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.workspaceAccess">workspace_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowClusterCreate"></a>

```python
allow_cluster_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.databricksSqlAccess"></a>

```python
databricks_sql_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#group_id Entitlements#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#id Entitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#user_id Entitlements#user_id}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.workspaceAccess"></a>

```python
workspace_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.32.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}.

---



