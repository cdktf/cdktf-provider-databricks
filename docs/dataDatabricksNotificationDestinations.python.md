# `dataDatabricksNotificationDestinations` Submodule <a name="`dataDatabricksNotificationDestinations` Submodule" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotificationDestinations <a name="DataDatabricksNotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations databricks_notification_destinations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name_contains: str = None,
  notification_destinations: typing.Union[IResolvable, typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.notificationDestinations">notification_destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]</code> | notification_destinations block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}.

---

##### `notification_destinations`<sup>Optional</sup> <a name="notification_destinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.notificationDestinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]

notification_destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#notification_destinations DataDatabricksNotificationDestinations#notification_destinations}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putNotificationDestinations">put_notification_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetNotificationDestinations">reset_notification_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_notification_destinations` <a name="put_notification_destinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putNotificationDestinations"></a>

```python
def put_notification_destinations(
  value: typing.Union[IResolvable, typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putNotificationDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]

---

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_notification_destinations` <a name="reset_notification_destinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetNotificationDestinations"></a>

```python
def reset_notification_destinations() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksNotificationDestinations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksNotificationDestinations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksNotificationDestinations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksNotificationDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksNotificationDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinations">notification_destinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList">DataDatabricksNotificationDestinationsNotificationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinationsInput">notification_destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `notification_destinations`<sup>Required</sup> <a name="notification_destinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinations"></a>

```python
notification_destinations: DataDatabricksNotificationDestinationsNotificationDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList">DataDatabricksNotificationDestinationsNotificationDestinationsList</a>

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `notification_destinations_input`<sup>Optional</sup> <a name="notification_destinations_input" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinationsInput"></a>

```python
notification_destinations_input: typing.Union[IResolvable, typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotificationDestinationsConfig <a name="DataDatabricksNotificationDestinationsConfig" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name_contains: str = None,
  notification_destinations: typing.Union[IResolvable, typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.notificationDestinations">notification_destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]</code> | notification_destinations block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}.

---

##### `notification_destinations`<sup>Optional</sup> <a name="notification_destinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.notificationDestinations"></a>

```python
notification_destinations: typing.Union[IResolvable, typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]

notification_destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#notification_destinations DataDatabricksNotificationDestinations#notification_destinations}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}.

---

### DataDatabricksNotificationDestinationsNotificationDestinations <a name="DataDatabricksNotificationDestinationsNotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations(
  destination_type: str = None,
  display_name: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}. |

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNotificationDestinationsNotificationDestinationsList <a name="DataDatabricksNotificationDestinationsNotificationDestinationsList" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]]

---


### DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference <a name="DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_type` <a name="reset_destination_type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksNotificationDestinationsNotificationDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]

---



