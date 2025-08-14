# `dataDatabricksCleanRoomAutoApprovalRules` Submodule <a name="`dataDatabricksCleanRoomAutoApprovalRules` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAutoApprovalRules <a name="DataDatabricksCleanRoomAutoApprovalRules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules databricks_clean_room_auto_approval_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCleanRoomAutoApprovalRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList">DataDatabricksCleanRoomAutoApprovalRulesRulesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.rules"></a>

```python
rules: DataDatabricksCleanRoomAutoApprovalRulesRulesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList">DataDatabricksCleanRoomAutoApprovalRulesRulesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAutoApprovalRulesConfig <a name="DataDatabricksCleanRoomAutoApprovalRulesConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

### DataDatabricksCleanRoomAutoApprovalRulesRules <a name="DataDatabricksCleanRoomAutoApprovalRulesRules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules(
  author_collaborator_alias: str = None,
  author_scope: str = None,
  clean_room_name: str = None,
  runner_collaborator_alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorCollaboratorAlias">author_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorScope">author_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.runnerCollaboratorAlias">runner_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}. |

---

##### `author_collaborator_alias`<sup>Optional</sup> <a name="author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorCollaboratorAlias"></a>

```python
author_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}.

---

##### `author_scope`<sup>Optional</sup> <a name="author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorScope"></a>

```python
author_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}.

---

##### `runner_collaborator_alias`<sup>Optional</sup> <a name="runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.runnerCollaboratorAlias"></a>

```python
runner_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAutoApprovalRulesRulesList <a name="DataDatabricksCleanRoomAutoApprovalRulesRulesList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAutoApprovalRulesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>]]

---


### DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference <a name="DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_auto_approval_rules

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorCollaboratorAlias">reset_author_collaborator_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorScope">reset_author_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetCleanRoomName">reset_clean_room_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetRunnerCollaboratorAlias">reset_runner_collaborator_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_author_collaborator_alias` <a name="reset_author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorCollaboratorAlias"></a>

```python
def reset_author_collaborator_alias() -> None
```

##### `reset_author_scope` <a name="reset_author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorScope"></a>

```python
def reset_author_scope() -> None
```

##### `reset_clean_room_name` <a name="reset_clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetCleanRoomName"></a>

```python
def reset_clean_room_name() -> None
```

##### `reset_runner_collaborator_alias` <a name="reset_runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetRunnerCollaboratorAlias"></a>

```python
def reset_runner_collaborator_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleOwnerCollaboratorAlias">rule_owner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAliasInput">author_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScopeInput">author_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomNameInput">clean_room_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAliasInput">runner_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAlias">author_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScope">author_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAlias">runner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `rule_owner_collaborator_alias`<sup>Required</sup> <a name="rule_owner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleOwnerCollaboratorAlias"></a>

```python
rule_owner_collaborator_alias: str
```

- *Type:* str

---

##### `author_collaborator_alias_input`<sup>Optional</sup> <a name="author_collaborator_alias_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAliasInput"></a>

```python
author_collaborator_alias_input: str
```

- *Type:* str

---

##### `author_scope_input`<sup>Optional</sup> <a name="author_scope_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScopeInput"></a>

```python
author_scope_input: str
```

- *Type:* str

---

##### `clean_room_name_input`<sup>Optional</sup> <a name="clean_room_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomNameInput"></a>

```python
clean_room_name_input: str
```

- *Type:* str

---

##### `runner_collaborator_alias_input`<sup>Optional</sup> <a name="runner_collaborator_alias_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAliasInput"></a>

```python
runner_collaborator_alias_input: str
```

- *Type:* str

---

##### `author_collaborator_alias`<sup>Required</sup> <a name="author_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAlias"></a>

```python
author_collaborator_alias: str
```

- *Type:* str

---

##### `author_scope`<sup>Required</sup> <a name="author_scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScope"></a>

```python
author_scope: str
```

- *Type:* str

---

##### `clean_room_name`<sup>Required</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

---

##### `runner_collaborator_alias`<sup>Required</sup> <a name="runner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAlias"></a>

```python
runner_collaborator_alias: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAutoApprovalRulesRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>

---



