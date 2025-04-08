# `sqlPermissions` Submodule <a name="`sqlPermissions` Submodule" id="@cdktf/provider-databricks.sqlPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlPermissions <a name="SqlPermissions" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions databricks_sql_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  anonymous_function: typing.Union[bool, IResolvable] = None,
  any_file: typing.Union[bool, IResolvable] = None,
  catalog: typing.Union[bool, IResolvable] = None,
  cluster_id: str = None,
  database: str = None,
  id: str = None,
  privilege_assignments: typing.Union[IResolvable, typing.List[SqlPermissionsPrivilegeAssignments]] = None,
  table: str = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anonymousFunction">anonymous_function</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anyFile">any_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.catalog">catalog</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#database SqlPermissions#database}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#id SqlPermissions#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.privilegeAssignments">privilege_assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]</code> | privilege_assignments block. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#table SqlPermissions#table}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#view SqlPermissions#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `anonymous_function`<sup>Optional</sup> <a name="anonymous_function" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anonymousFunction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}.

---

##### `any_file`<sup>Optional</sup> <a name="any_file" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anyFile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.catalog"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#database SqlPermissions#database}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#id SqlPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege_assignments`<sup>Optional</sup> <a name="privilege_assignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.privilegeAssignments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]

privilege_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.table"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#table SqlPermissions#table}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#view SqlPermissions#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments">put_privilege_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnonymousFunction">reset_anonymous_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnyFile">reset_any_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetPrivilegeAssignments">reset_privilege_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_privilege_assignments` <a name="put_privilege_assignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments"></a>

```python
def put_privilege_assignments(
  value: typing.Union[IResolvable, typing.List[SqlPermissionsPrivilegeAssignments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]

---

##### `reset_anonymous_function` <a name="reset_anonymous_function" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnonymousFunction"></a>

```python
def reset_anonymous_function() -> None
```

##### `reset_any_file` <a name="reset_any_file" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnyFile"></a>

```python
def reset_any_file() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_privilege_assignments` <a name="reset_privilege_assignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetPrivilegeAssignments"></a>

```python
def reset_privilege_assignments() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SqlPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SqlPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqlPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqlPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignments">privilege_assignments</a></code> | <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList">SqlPermissionsPrivilegeAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunctionInput">anonymous_function_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFileInput">any_file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalogInput">catalog_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignmentsInput">privilege_assignments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunction">anonymous_function</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFile">any_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalog">catalog</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `privilege_assignments`<sup>Required</sup> <a name="privilege_assignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignments"></a>

```python
privilege_assignments: SqlPermissionsPrivilegeAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList">SqlPermissionsPrivilegeAssignmentsList</a>

---

##### `anonymous_function_input`<sup>Optional</sup> <a name="anonymous_function_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunctionInput"></a>

```python
anonymous_function_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_file_input`<sup>Optional</sup> <a name="any_file_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFileInput"></a>

```python
any_file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalogInput"></a>

```python
catalog_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `privilege_assignments_input`<sup>Optional</sup> <a name="privilege_assignments_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignmentsInput"></a>

```python
privilege_assignments_input: typing.Union[IResolvable, typing.List[SqlPermissionsPrivilegeAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `anonymous_function`<sup>Required</sup> <a name="anonymous_function" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunction"></a>

```python
anonymous_function: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `any_file`<sup>Required</sup> <a name="any_file" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFile"></a>

```python
any_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalog"></a>

```python
catalog: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlPermissionsConfig <a name="SqlPermissionsConfig" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  anonymous_function: typing.Union[bool, IResolvable] = None,
  any_file: typing.Union[bool, IResolvable] = None,
  catalog: typing.Union[bool, IResolvable] = None,
  cluster_id: str = None,
  database: str = None,
  id: str = None,
  privilege_assignments: typing.Union[IResolvable, typing.List[SqlPermissionsPrivilegeAssignments]] = None,
  table: str = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anonymousFunction">anonymous_function</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anyFile">any_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.catalog">catalog</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#database SqlPermissions#database}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#id SqlPermissions#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.privilegeAssignments">privilege_assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]</code> | privilege_assignments block. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#table SqlPermissions#table}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#view SqlPermissions#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `anonymous_function`<sup>Optional</sup> <a name="anonymous_function" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anonymousFunction"></a>

```python
anonymous_function: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}.

---

##### `any_file`<sup>Optional</sup> <a name="any_file" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anyFile"></a>

```python
any_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.catalog"></a>

```python
catalog: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#database SqlPermissions#database}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#id SqlPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege_assignments`<sup>Optional</sup> <a name="privilege_assignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.privilegeAssignments"></a>

```python
privilege_assignments: typing.Union[IResolvable, typing.List[SqlPermissionsPrivilegeAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]

privilege_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.table"></a>

```python
table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#table SqlPermissions#table}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#view SqlPermissions#view}.

---

### SqlPermissionsPrivilegeAssignments <a name="SqlPermissionsPrivilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissionsPrivilegeAssignments(
  principal: str,
  privileges: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#principal SqlPermissions#principal}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#principal SqlPermissions#principal}.

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlPermissionsPrivilegeAssignmentsList <a name="SqlPermissionsPrivilegeAssignmentsList" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissionsPrivilegeAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SqlPermissionsPrivilegeAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SqlPermissionsPrivilegeAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]]

---


### SqlPermissionsPrivilegeAssignmentsOutputReference <a name="SqlPermissionsPrivilegeAssignmentsOutputReference" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_permissions

sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SqlPermissionsPrivilegeAssignments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>]

---



