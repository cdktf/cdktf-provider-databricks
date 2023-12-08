# `sqlWidget` Submodule <a name="`sqlWidget` Submodule" id="@cdktf/provider-databricks.sqlWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlWidget <a name="SqlWidget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget databricks_sql_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dashboard_id: str,
  description: str = None,
  id: str = None,
  parameter: typing.Union[IResolvable, typing.List[SqlWidgetParameter]] = None,
  position: SqlWidgetPosition = None,
  text: str = None,
  title: str = None,
  visualization_id: str = None,
  widget_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dashboardId">dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.position">position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.visualizationId">visualization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.widgetId">widget_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dashboardId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.position"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#position SqlWidget#position}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `visualization_id`<sup>Optional</sup> <a name="visualization_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.visualizationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `widget_id`<sup>Optional</sup> <a name="widget_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.widgetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition">put_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId">reset_visualization_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId">reset_widget_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[SqlWidgetParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]

---

##### `put_position` <a name="put_position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition"></a>

```python
def put_position(
  size_x: typing.Union[int, float],
  size_y: typing.Union[int, float],
  auto_height: typing.Union[bool, IResolvable] = None,
  pos_x: typing.Union[int, float] = None,
  pos_y: typing.Union[int, float] = None
) -> None
```

###### `size_x`<sup>Required</sup> <a name="size_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.sizeX"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#size_x SqlWidget#size_x}.

---

###### `size_y`<sup>Required</sup> <a name="size_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.sizeY"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#size_y SqlWidget#size_y}.

---

###### `auto_height`<sup>Optional</sup> <a name="auto_height" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.autoHeight"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#auto_height SqlWidget#auto_height}.

---

###### `pos_x`<sup>Optional</sup> <a name="pos_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.posX"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#pos_x SqlWidget#pos_x}.

---

###### `pos_y`<sup>Optional</sup> <a name="pos_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.posY"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#pos_y SqlWidget#pos_y}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_visualization_id` <a name="reset_visualization_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId"></a>

```python
def reset_visualization_id() -> None
```

##### `reset_widget_id` <a name="reset_widget_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId"></a>

```python
def reset_widget_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqlWidget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqlWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position">position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput">dashboard_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput">position_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput">visualization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput">widget_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId">visualization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId">widget_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter"></a>

```python
parameter: SqlWidgetParameterList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a>

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position"></a>

```python
position: SqlWidgetPositionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a>

---

##### `dashboard_id_input`<sup>Optional</sup> <a name="dashboard_id_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput"></a>

```python
dashboard_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[SqlWidgetParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput"></a>

```python
position_input: SqlWidgetPosition
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `visualization_id_input`<sup>Optional</sup> <a name="visualization_id_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput"></a>

```python
visualization_id_input: str
```

- *Type:* str

---

##### `widget_id_input`<sup>Optional</sup> <a name="widget_id_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput"></a>

```python
widget_id_input: str
```

- *Type:* str

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `visualization_id`<sup>Required</sup> <a name="visualization_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId"></a>

```python
visualization_id: str
```

- *Type:* str

---

##### `widget_id`<sup>Required</sup> <a name="widget_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId"></a>

```python
widget_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlWidgetConfig <a name="SqlWidgetConfig" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidgetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dashboard_id: str,
  description: str = None,
  id: str = None,
  parameter: typing.Union[IResolvable, typing.List[SqlWidgetParameter]] = None,
  position: SqlWidgetPosition = None,
  text: str = None,
  title: str = None,
  visualization_id: str = None,
  widget_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId">dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position">position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId">visualization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId">widget_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[SqlWidgetParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position"></a>

```python
position: SqlWidgetPosition
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#position SqlWidget#position}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `visualization_id`<sup>Optional</sup> <a name="visualization_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId"></a>

```python
visualization_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `widget_id`<sup>Optional</sup> <a name="widget_id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId"></a>

```python
widget_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

### SqlWidgetParameter <a name="SqlWidgetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidgetParameter(
  name: str,
  type: str,
  map_to: str = None,
  title: str = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#name SqlWidget#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#type SqlWidget#type}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo">map_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#map_to SqlWidget#map_to}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#value SqlWidget#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#values SqlWidget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#name SqlWidget#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#type SqlWidget#type}.

---

##### `map_to`<sup>Optional</sup> <a name="map_to" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo"></a>

```python
map_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#map_to SqlWidget#map_to}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#value SqlWidget#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#values SqlWidget#values}.

---

### SqlWidgetPosition <a name="SqlWidgetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidgetPosition(
  size_x: typing.Union[int, float],
  size_y: typing.Union[int, float],
  auto_height: typing.Union[bool, IResolvable] = None,
  pos_x: typing.Union[int, float] = None,
  pos_y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX">size_x</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#size_x SqlWidget#size_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY">size_y</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#size_y SqlWidget#size_y}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight">auto_height</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#auto_height SqlWidget#auto_height}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX">pos_x</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#pos_x SqlWidget#pos_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY">pos_y</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#pos_y SqlWidget#pos_y}. |

---

##### `size_x`<sup>Required</sup> <a name="size_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX"></a>

```python
size_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#size_x SqlWidget#size_x}.

---

##### `size_y`<sup>Required</sup> <a name="size_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY"></a>

```python
size_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#size_y SqlWidget#size_y}.

---

##### `auto_height`<sup>Optional</sup> <a name="auto_height" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight"></a>

```python
auto_height: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#auto_height SqlWidget#auto_height}.

---

##### `pos_x`<sup>Optional</sup> <a name="pos_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX"></a>

```python
pos_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#pos_x SqlWidget#pos_x}.

---

##### `pos_y`<sup>Optional</sup> <a name="pos_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY"></a>

```python
pos_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.1/docs/resources/sql_widget#pos_y SqlWidget#pos_y}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlWidgetParameterList <a name="SqlWidgetParameterList" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidgetParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SqlWidgetParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SqlWidgetParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]]

---


### SqlWidgetParameterOutputReference <a name="SqlWidgetParameterOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidgetParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo">reset_map_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_map_to` <a name="reset_map_to" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo"></a>

```python
def reset_map_to() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput">map_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo">map_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `map_to_input`<sup>Optional</sup> <a name="map_to_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput"></a>

```python
map_to_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `map_to`<sup>Required</sup> <a name="map_to" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo"></a>

```python
map_to: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SqlWidgetParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>]

---


### SqlWidgetPositionOutputReference <a name="SqlWidgetPositionOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_widget

sqlWidget.SqlWidgetPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight">reset_auto_height</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX">reset_pos_x</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY">reset_pos_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_height` <a name="reset_auto_height" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight"></a>

```python
def reset_auto_height() -> None
```

##### `reset_pos_x` <a name="reset_pos_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX"></a>

```python
def reset_pos_x() -> None
```

##### `reset_pos_y` <a name="reset_pos_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY"></a>

```python
def reset_pos_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput">auto_height_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput">pos_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput">pos_y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput">size_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput">size_y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight">auto_height</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX">pos_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY">pos_y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX">size_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY">size_y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_height_input`<sup>Optional</sup> <a name="auto_height_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput"></a>

```python
auto_height_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pos_x_input`<sup>Optional</sup> <a name="pos_x_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput"></a>

```python
pos_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pos_y_input`<sup>Optional</sup> <a name="pos_y_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput"></a>

```python
pos_y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_x_input`<sup>Optional</sup> <a name="size_x_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput"></a>

```python
size_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_y_input`<sup>Optional</sup> <a name="size_y_input" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput"></a>

```python
size_y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_height`<sup>Required</sup> <a name="auto_height" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight"></a>

```python
auto_height: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pos_x`<sup>Required</sup> <a name="pos_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX"></a>

```python
pos_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pos_y`<sup>Required</sup> <a name="pos_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY"></a>

```python
pos_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_x`<sup>Required</sup> <a name="size_x" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX"></a>

```python
size_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_y`<sup>Required</sup> <a name="size_y" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY"></a>

```python
size_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue"></a>

```python
internal_value: SqlWidgetPosition
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---



