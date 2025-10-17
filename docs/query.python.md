# `query` Submodule <a name="`query` Submodule" id="@cdktf/provider-databricks.query"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Query <a name="Query" id="@cdktf/provider-databricks.query.Query"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query databricks_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.Query.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.Query(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  query_text: str,
  warehouse_id: str,
  apply_auto_limit: bool | IResolvable = None,
  catalog: str = None,
  description: str = None,
  owner_user_name: str = None,
  parameter: IResolvable | typing.List[QueryParameter] = None,
  parent_path: str = None,
  run_as_mode: str = None,
  schema: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.queryText">query_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.applyAutoLimit">apply_auto_limit</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.ownerUserName">owner_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.parameter">parameter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.runAsMode">run_as_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#tags Query#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#display_name Query#display_name}.

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.queryText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_text Query#query_text}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `apply_auto_limit`<sup>Optional</sup> <a name="apply_auto_limit" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.applyAutoLimit"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#catalog Query#catalog}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#description Query#description}.

---

##### `owner_user_name`<sup>Optional</sup> <a name="owner_user_name" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.ownerUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.parameter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parameter Query#parameter}

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.parentPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `run_as_mode`<sup>Optional</sup> <a name="run_as_mode" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.runAsMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#schema Query#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#tags Query#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.query.Query.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.query.Query.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.query.Query.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetApplyAutoLimit">reset_apply_auto_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOwnerUserName">reset_owner_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParentPath">reset_parent_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetRunAsMode">reset_run_as_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.Query.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.query.Query.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.query.Query.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.query.Query.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.query.Query.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.query.Query.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.query.Query.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.query.Query.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.query.Query.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.query.Query.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.Query.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.query.Query.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.query.Query.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.query.Query.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.query.Query.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.query.Query.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-databricks.query.Query.putParameter"></a>

```python
def put_parameter(
  value: IResolvable | typing.List[QueryParameter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]

---

##### `reset_apply_auto_limit` <a name="reset_apply_auto_limit" id="@cdktf/provider-databricks.query.Query.resetApplyAutoLimit"></a>

```python
def reset_apply_auto_limit() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-databricks.query.Query.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.query.Query.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_owner_user_name` <a name="reset_owner_user_name" id="@cdktf/provider-databricks.query.Query.resetOwnerUserName"></a>

```python
def reset_owner_user_name() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-databricks.query.Query.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_parent_path` <a name="reset_parent_path" id="@cdktf/provider-databricks.query.Query.resetParentPath"></a>

```python
def reset_parent_path() -> None
```

##### `reset_run_as_mode` <a name="reset_run_as_mode" id="@cdktf/provider-databricks.query.Query.resetRunAsMode"></a>

```python
def reset_run_as_mode() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-databricks.query.Query.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-databricks.query.Query.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.query.Query.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.Query.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.query.Query.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.Query.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.query.Query.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.Query.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.query.Query.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.Query.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Query to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Query that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Query to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lastModifierUserName">last_modifier_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput">apply_auto_limit_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserNameInput">owner_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameterInput">parameter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPathInput">parent_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsModeInput">run_as_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimit">apply_auto_limit</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsMode">run_as_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.query.Query.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.query.Query.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.Query.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.query.Query.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.query.Query.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.query.Query.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.Query.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.Query.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.query.Query.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.query.Query.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.Query.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.Query.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.query.Query.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modifier_user_name`<sup>Required</sup> <a name="last_modifier_user_name" id="@cdktf/provider-databricks.query.Query.property.lastModifierUserName"></a>

```python
last_modifier_user_name: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.query.Query.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.query.Query.property.parameter"></a>

```python
parameter: QueryParameterList
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.query.Query.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `apply_auto_limit_input`<sup>Optional</sup> <a name="apply_auto_limit_input" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput"></a>

```python
apply_auto_limit_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-databricks.query.Query.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.query.Query.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.query.Query.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `owner_user_name_input`<sup>Optional</sup> <a name="owner_user_name_input" id="@cdktf/provider-databricks.query.Query.property.ownerUserNameInput"></a>

```python
owner_user_name_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-databricks.query.Query.property.parameterInput"></a>

```python
parameter_input: IResolvable | typing.List[QueryParameter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]

---

##### `parent_path_input`<sup>Optional</sup> <a name="parent_path_input" id="@cdktf/provider-databricks.query.Query.property.parentPathInput"></a>

```python
parent_path_input: str
```

- *Type:* str

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="@cdktf/provider-databricks.query.Query.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `run_as_mode_input`<sup>Optional</sup> <a name="run_as_mode_input" id="@cdktf/provider-databricks.query.Query.property.runAsModeInput"></a>

```python
run_as_mode_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-databricks.query.Query.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-databricks.query.Query.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.query.Query.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `apply_auto_limit`<sup>Required</sup> <a name="apply_auto_limit" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimit"></a>

```python
apply_auto_limit: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.query.Query.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.query.Query.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.query.Query.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="@cdktf/provider-databricks.query.Query.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.query.Query.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="@cdktf/provider-databricks.query.Query.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `run_as_mode`<sup>Required</sup> <a name="run_as_mode" id="@cdktf/provider-databricks.query.Query.property.runAsMode"></a>

```python
run_as_mode: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-databricks.query.Query.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.query.Query.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.query.Query.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.query.Query.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QueryConfig <a name="QueryConfig" id="@cdktf/provider-databricks.query.QueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  query_text: str,
  warehouse_id: str,
  apply_auto_limit: bool | IResolvable = None,
  catalog: str = None,
  description: str = None,
  owner_user_name: str = None,
  parameter: IResolvable | typing.List[QueryParameter] = None,
  parent_path: str = None,
  run_as_mode: str = None,
  schema: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.queryText">query_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit">apply_auto_limit</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.runAsMode">run_as_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#tags Query#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.QueryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.QueryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.query.QueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.query.QueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.QueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.QueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.QueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.query.QueryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#display_name Query#display_name}.

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="@cdktf/provider-databricks.query.QueryConfig.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_text Query#query_text}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.query.QueryConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `apply_auto_limit`<sup>Optional</sup> <a name="apply_auto_limit" id="@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit"></a>

```python
apply_auto_limit: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.query.QueryConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#catalog Query#catalog}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.query.QueryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#description Query#description}.

---

##### `owner_user_name`<sup>Optional</sup> <a name="owner_user_name" id="@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.query.QueryConfig.property.parameter"></a>

```python
parameter: IResolvable | typing.List[QueryParameter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parameter Query#parameter}

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktf/provider-databricks.query.QueryConfig.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `run_as_mode`<sup>Optional</sup> <a name="run_as_mode" id="@cdktf/provider-databricks.query.QueryConfig.property.runAsMode"></a>

```python
run_as_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.query.QueryConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#schema Query#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.query.QueryConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#tags Query#tags}.

---

### QueryParameter <a name="QueryParameter" id="@cdktf/provider-databricks.query.QueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameter(
  name: str,
  date_range_value: QueryParameterDateRangeValue = None,
  date_value: QueryParameterDateValue = None,
  enum_value: QueryParameterEnumValue = None,
  numeric_value: QueryParameterNumericValue = None,
  query_backed_value: QueryParameterQueryBackedValue = None,
  text_value: QueryParameterTextValue = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#name Query#name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue">date_range_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateValue">date_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | date_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.enumValue">enum_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | enum_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.numericValue">numeric_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | numeric_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue">query_backed_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | query_backed_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.textValue">text_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | text_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#title Query#title}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.query.QueryParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#name Query#name}.

---

##### `date_range_value`<sup>Optional</sup> <a name="date_range_value" id="@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue"></a>

```python
date_range_value: QueryParameterDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-databricks.query.QueryParameter.property.dateValue"></a>

```python
date_value: QueryParameterDateValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

date_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}

---

##### `enum_value`<sup>Optional</sup> <a name="enum_value" id="@cdktf/provider-databricks.query.QueryParameter.property.enumValue"></a>

```python
enum_value: QueryParameterEnumValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

enum_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_value Query#enum_value}

---

##### `numeric_value`<sup>Optional</sup> <a name="numeric_value" id="@cdktf/provider-databricks.query.QueryParameter.property.numericValue"></a>

```python
numeric_value: QueryParameterNumericValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

numeric_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#numeric_value Query#numeric_value}

---

##### `query_backed_value`<sup>Optional</sup> <a name="query_backed_value" id="@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue"></a>

```python
query_backed_value: QueryParameterQueryBackedValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

query_backed_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_backed_value Query#query_backed_value}

---

##### `text_value`<sup>Optional</sup> <a name="text_value" id="@cdktf/provider-databricks.query.QueryParameter.property.textValue"></a>

```python
text_value: QueryParameterTextValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

text_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#text_value Query#text_value}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.query.QueryParameter.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#title Query#title}.

---

### QueryParameterDateRangeValue <a name="QueryParameterDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterDateRangeValue(
  date_range_value: QueryParameterDateRangeValueDateRangeValue = None,
  dynamic_date_range_value: str = None,
  precision: str = None,
  start_day_of_week: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue">date_range_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue">dynamic_date_range_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision">precision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek">start_day_of_week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start_day_of_week Query#start_day_of_week}. |

---

##### `date_range_value`<sup>Optional</sup> <a name="date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue"></a>

```python
date_range_value: QueryParameterDateRangeValueDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `dynamic_date_range_value`<sup>Optional</sup> <a name="dynamic_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue"></a>

```python
dynamic_date_range_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}.

---

##### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision"></a>

```python
precision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}.

---

##### `start_day_of_week`<sup>Optional</sup> <a name="start_day_of_week" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek"></a>

```python
start_day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start_day_of_week Query#start_day_of_week}.

---

### QueryParameterDateRangeValueDateRangeValue <a name="QueryParameterDateRangeValueDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterDateRangeValueDateRangeValue(
  end: str,
  start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#end Query#end}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start Query#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#end Query#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start Query#start}.

---

### QueryParameterDateValue <a name="QueryParameterDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterDateValue(
  date_value: str = None,
  dynamic_date_value: str = None,
  precision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue">dynamic_date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision">precision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}.

---

##### `dynamic_date_value`<sup>Optional</sup> <a name="dynamic_date_value" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue"></a>

```python
dynamic_date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}.

---

##### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision"></a>

```python
precision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}.

---

### QueryParameterEnumValue <a name="QueryParameterEnumValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterEnumValue(
  enum_options: str = None,
  multi_values_options: QueryParameterEnumValueMultiValuesOptions = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions">enum_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_options Query#enum_options}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions">multi_values_options</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}. |

---

##### `enum_options`<sup>Optional</sup> <a name="enum_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions"></a>

```python
enum_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_options Query#enum_options}.

---

##### `multi_values_options`<sup>Optional</sup> <a name="multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions"></a>

```python
multi_values_options: QueryParameterEnumValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}.

---

### QueryParameterEnumValueMultiValuesOptions <a name="QueryParameterEnumValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterEnumValueMultiValuesOptions(
  prefix: str = None,
  separator: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator">separator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator"></a>

```python
separator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterNumericValue <a name="QueryParameterNumericValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterNumericValue(
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}.

---

### QueryParameterQueryBackedValue <a name="QueryParameterQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterQueryBackedValue(
  query_id: str,
  multi_values_options: QueryParameterQueryBackedValueMultiValuesOptions = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId">query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_id Query#query_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions">multi_values_options</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}. |

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_id Query#query_id}.

---

##### `multi_values_options`<sup>Optional</sup> <a name="multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions"></a>

```python
multi_values_options: QueryParameterQueryBackedValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}.

---

### QueryParameterQueryBackedValueMultiValuesOptions <a name="QueryParameterQueryBackedValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterQueryBackedValueMultiValuesOptions(
  prefix: str = None,
  separator: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator">separator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator"></a>

```python
separator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterTextValue <a name="QueryParameterTextValue" id="@cdktf/provider-databricks.query.QueryParameterTextValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterTextValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterTextValue(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterTextValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QueryParameterDateRangeValueDateRangeValueOutputReference <a name="QueryParameterDateRangeValueDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterDateRangeValueDateRangeValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterDateRangeValueDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---


### QueryParameterDateRangeValueOutputReference <a name="QueryParameterDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterDateRangeValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue">put_date_range_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue">reset_date_range_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue">reset_dynamic_date_range_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision">reset_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek">reset_start_day_of_week</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date_range_value` <a name="put_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue"></a>

```python
def put_date_range_value(
  end: str,
  start: str
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#end Query#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start Query#start}.

---

##### `reset_date_range_value` <a name="reset_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue"></a>

```python
def reset_date_range_value() -> None
```

##### `reset_dynamic_date_range_value` <a name="reset_dynamic_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue"></a>

```python
def reset_dynamic_date_range_value() -> None
```

##### `reset_precision` <a name="reset_precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision"></a>

```python
def reset_precision() -> None
```

##### `reset_start_day_of_week` <a name="reset_start_day_of_week" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek"></a>

```python
def reset_start_day_of_week() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue">date_range_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput">date_range_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput">dynamic_date_range_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput">precision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput">start_day_of_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue">dynamic_date_range_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision">precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek">start_day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_range_value`<sup>Required</sup> <a name="date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue"></a>

```python
date_range_value: QueryParameterDateRangeValueDateRangeValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a>

---

##### `date_range_value_input`<sup>Optional</sup> <a name="date_range_value_input" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput"></a>

```python
date_range_value_input: QueryParameterDateRangeValueDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `dynamic_date_range_value_input`<sup>Optional</sup> <a name="dynamic_date_range_value_input" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput"></a>

```python
dynamic_date_range_value_input: str
```

- *Type:* str

---

##### `precision_input`<sup>Optional</sup> <a name="precision_input" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput"></a>

```python
precision_input: str
```

- *Type:* str

---

##### `start_day_of_week_input`<sup>Optional</sup> <a name="start_day_of_week_input" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput"></a>

```python
start_day_of_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_date_range_value`<sup>Required</sup> <a name="dynamic_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue"></a>

```python
dynamic_date_range_value: str
```

- *Type:* str

---

##### `precision`<sup>Required</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision"></a>

```python
precision: str
```

- *Type:* str

---

##### `start_day_of_week`<sup>Required</sup> <a name="start_day_of_week" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek"></a>

```python
start_day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---


### QueryParameterDateValueOutputReference <a name="QueryParameterDateValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterDateValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue">reset_dynamic_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision">reset_precision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_dynamic_date_value` <a name="reset_dynamic_date_value" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue"></a>

```python
def reset_dynamic_date_value() -> None
```

##### `reset_precision` <a name="reset_precision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision"></a>

```python
def reset_precision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput">dynamic_date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput">precision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue">dynamic_date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision">precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `dynamic_date_value_input`<sup>Optional</sup> <a name="dynamic_date_value_input" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput"></a>

```python
dynamic_date_value_input: str
```

- *Type:* str

---

##### `precision_input`<sup>Optional</sup> <a name="precision_input" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput"></a>

```python
precision_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `dynamic_date_value`<sup>Required</sup> <a name="dynamic_date_value" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue"></a>

```python
dynamic_date_value: str
```

- *Type:* str

---

##### `precision`<sup>Required</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision"></a>

```python
precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterDateValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---


### QueryParameterEnumValueMultiValuesOptionsOutputReference <a name="QueryParameterEnumValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterEnumValueMultiValuesOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator">reset_separator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_separator` <a name="reset_separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```python
def reset_separator() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput">separator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator">separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `separator_input`<sup>Optional</sup> <a name="separator_input" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```python
separator_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator"></a>

```python
separator: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterEnumValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---


### QueryParameterEnumValueOutputReference <a name="QueryParameterEnumValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterEnumValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions">put_multi_values_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions">reset_enum_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions">reset_multi_values_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_values_options` <a name="put_multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions"></a>

```python
def put_multi_values_options(
  prefix: str = None,
  separator: str = None,
  suffix: str = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}.

---

###### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.separator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}.

---

##### `reset_enum_options` <a name="reset_enum_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions"></a>

```python
def reset_enum_options() -> None
```

##### `reset_multi_values_options` <a name="reset_multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions"></a>

```python
def reset_multi_values_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions">multi_values_options</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput">enum_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput">multi_values_options_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions">enum_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_values_options`<sup>Required</sup> <a name="multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions"></a>

```python
multi_values_options: QueryParameterEnumValueMultiValuesOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a>

---

##### `enum_options_input`<sup>Optional</sup> <a name="enum_options_input" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput"></a>

```python
enum_options_input: str
```

- *Type:* str

---

##### `multi_values_options_input`<sup>Optional</sup> <a name="multi_values_options_input" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput"></a>

```python
multi_values_options_input: QueryParameterEnumValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enum_options`<sup>Required</sup> <a name="enum_options" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions"></a>

```python
enum_options: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterEnumValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---


### QueryParameterList <a name="QueryParameterList" id="@cdktf/provider-databricks.query.QueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.query.QueryParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.query.QueryParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QueryParameter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>]

---


### QueryParameterNumericValueOutputReference <a name="QueryParameterNumericValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterNumericValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterNumericValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---


### QueryParameterOutputReference <a name="QueryParameterOutputReference" id="@cdktf/provider-databricks.query.QueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue">put_date_range_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue">put_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue">put_enum_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue">put_numeric_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue">put_query_backed_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue">put_text_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue">reset_date_range_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue">reset_enum_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue">reset_numeric_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue">reset_query_backed_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue">reset_text_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date_range_value` <a name="put_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue"></a>

```python
def put_date_range_value(
  date_range_value: QueryParameterDateRangeValueDateRangeValue = None,
  dynamic_date_range_value: str = None,
  precision: str = None,
  start_day_of_week: typing.Union[int, float] = None
) -> None
```

###### `date_range_value`<sup>Optional</sup> <a name="date_range_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.dateRangeValue"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_range_value Query#date_range_value}

---

###### `dynamic_date_range_value`<sup>Optional</sup> <a name="dynamic_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.dynamicDateRangeValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}.

---

###### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.precision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}.

---

###### `start_day_of_week`<sup>Optional</sup> <a name="start_day_of_week" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.startDayOfWeek"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start_day_of_week Query#start_day_of_week}.

---

##### `put_date_value` <a name="put_date_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue"></a>

```python
def put_date_value(
  date_value: str = None,
  dynamic_date_value: str = None,
  precision: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}.

---

###### `dynamic_date_value`<sup>Optional</sup> <a name="dynamic_date_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.dynamicDateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}.

---

###### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.precision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}.

---

##### `put_enum_value` <a name="put_enum_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue"></a>

```python
def put_enum_value(
  enum_options: str = None,
  multi_values_options: QueryParameterEnumValueMultiValuesOptions = None,
  values: typing.List[str] = None
) -> None
```

###### `enum_options`<sup>Optional</sup> <a name="enum_options" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.enumOptions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_options Query#enum_options}.

---

###### `multi_values_options`<sup>Optional</sup> <a name="multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.multiValuesOptions"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}.

---

##### `put_numeric_value` <a name="put_numeric_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue"></a>

```python
def put_numeric_value(
  value: typing.Union[int, float]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}.

---

##### `put_query_backed_value` <a name="put_query_backed_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue"></a>

```python
def put_query_backed_value(
  query_id: str,
  multi_values_options: QueryParameterQueryBackedValueMultiValuesOptions = None,
  values: typing.List[str] = None
) -> None
```

###### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.queryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_id Query#query_id}.

---

###### `multi_values_options`<sup>Optional</sup> <a name="multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.multiValuesOptions"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}.

---

##### `put_text_value` <a name="put_text_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue"></a>

```python
def put_text_value(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}.

---

##### `reset_date_range_value` <a name="reset_date_range_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue"></a>

```python
def reset_date_range_value() -> None
```

##### `reset_date_value` <a name="reset_date_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_enum_value` <a name="reset_enum_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue"></a>

```python
def reset_enum_value() -> None
```

##### `reset_numeric_value` <a name="reset_numeric_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue"></a>

```python
def reset_numeric_value() -> None
```

##### `reset_query_backed_value` <a name="reset_query_backed_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue"></a>

```python
def reset_query_backed_value() -> None
```

##### `reset_text_value` <a name="reset_text_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue"></a>

```python
def reset_text_value() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue">date_range_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue">date_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue">enum_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue">numeric_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue">query_backed_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue">text_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput">date_range_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput">date_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput">enum_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput">numeric_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput">query_backed_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput">text_value_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_range_value`<sup>Required</sup> <a name="date_range_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue"></a>

```python
date_range_value: QueryParameterDateRangeValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a>

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue"></a>

```python
date_value: QueryParameterDateValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a>

---

##### `enum_value`<sup>Required</sup> <a name="enum_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue"></a>

```python
enum_value: QueryParameterEnumValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a>

---

##### `numeric_value`<sup>Required</sup> <a name="numeric_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue"></a>

```python
numeric_value: QueryParameterNumericValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a>

---

##### `query_backed_value`<sup>Required</sup> <a name="query_backed_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue"></a>

```python
query_backed_value: QueryParameterQueryBackedValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a>

---

##### `text_value`<sup>Required</sup> <a name="text_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue"></a>

```python
text_value: QueryParameterTextValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a>

---

##### `date_range_value_input`<sup>Optional</sup> <a name="date_range_value_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput"></a>

```python
date_range_value_input: QueryParameterDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput"></a>

```python
date_value_input: QueryParameterDateValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `enum_value_input`<sup>Optional</sup> <a name="enum_value_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput"></a>

```python
enum_value_input: QueryParameterEnumValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `numeric_value_input`<sup>Optional</sup> <a name="numeric_value_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput"></a>

```python
numeric_value_input: QueryParameterNumericValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `query_backed_value_input`<sup>Optional</sup> <a name="query_backed_value_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput"></a>

```python
query_backed_value_input: QueryParameterQueryBackedValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `text_value_input`<sup>Optional</sup> <a name="text_value_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput"></a>

```python
text_value_input: QueryParameterTextValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QueryParameter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>

---


### QueryParameterQueryBackedValueMultiValuesOptionsOutputReference <a name="QueryParameterQueryBackedValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator">reset_separator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_separator` <a name="reset_separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```python
def reset_separator() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput">separator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator">separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `separator_input`<sup>Optional</sup> <a name="separator_input" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```python
separator_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator"></a>

```python
separator: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterQueryBackedValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---


### QueryParameterQueryBackedValueOutputReference <a name="QueryParameterQueryBackedValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterQueryBackedValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions">put_multi_values_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions">reset_multi_values_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_values_options` <a name="put_multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions"></a>

```python
def put_multi_values_options(
  prefix: str = None,
  separator: str = None,
  suffix: str = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}.

---

###### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.separator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}.

---

##### `reset_multi_values_options` <a name="reset_multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions"></a>

```python
def reset_multi_values_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions">multi_values_options</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput">multi_values_options_input</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput">query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId">query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_values_options`<sup>Required</sup> <a name="multi_values_options" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions"></a>

```python
multi_values_options: QueryParameterQueryBackedValueMultiValuesOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a>

---

##### `multi_values_options_input`<sup>Optional</sup> <a name="multi_values_options_input" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput"></a>

```python
multi_values_options_input: QueryParameterQueryBackedValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `query_id_input`<sup>Optional</sup> <a name="query_id_input" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput"></a>

```python
query_id_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterQueryBackedValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---


### QueryParameterTextValueOutputReference <a name="QueryParameterTextValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import query

query.QueryParameterTextValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue"></a>

```python
internal_value: QueryParameterTextValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---



