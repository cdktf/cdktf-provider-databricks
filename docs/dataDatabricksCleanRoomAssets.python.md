# `dataDatabricksCleanRoomAssets` Submodule <a name="`dataDatabricksCleanRoomAssets` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAssets <a name="DataDatabricksCleanRoomAssets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets databricks_clean_room_assets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAssets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCleanRoomAssets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCleanRoomAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList">DataDatabricksCleanRoomAssetsAssetsList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.assets"></a>

```python
assets: DataDatabricksCleanRoomAssetsAssetsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList">DataDatabricksCleanRoomAssetsAssetsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetsAssets <a name="DataDatabricksCleanRoomAssetsAssets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets(
  asset_type: str,
  name: str,
  clean_room_name: str = None,
  foreign_table: DataDatabricksCleanRoomAssetsAssetsForeignTable = None,
  foreign_table_local_details: DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails = None,
  notebook: DataDatabricksCleanRoomAssetsAssetsNotebook = None,
  table: DataDatabricksCleanRoomAssetsAssetsTable = None,
  table_local_details: DataDatabricksCleanRoomAssetsAssetsTableLocalDetails = None,
  view: DataDatabricksCleanRoomAssetsAssetsView = None,
  view_local_details: DataDatabricksCleanRoomAssetsAssetsViewLocalDetails = None,
  volume_local_details: DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#asset_type DataDatabricksCleanRoomAssets#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#clean_room_name DataDatabricksCleanRoomAssets#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#foreign_table DataDatabricksCleanRoomAssets#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssets#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#notebook DataDatabricksCleanRoomAssets#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#table DataDatabricksCleanRoomAssets#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#table_local_details DataDatabricksCleanRoomAssets#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#view DataDatabricksCleanRoomAssets#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#view_local_details DataDatabricksCleanRoomAssets#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#volume_local_details DataDatabricksCleanRoomAssets#volume_local_details}. |

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#asset_type DataDatabricksCleanRoomAssets#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#clean_room_name DataDatabricksCleanRoomAssets#clean_room_name}.

---

##### `foreign_table`<sup>Optional</sup> <a name="foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTable"></a>

```python
foreign_table: DataDatabricksCleanRoomAssetsAssetsForeignTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#foreign_table DataDatabricksCleanRoomAssets#foreign_table}.

---

##### `foreign_table_local_details`<sup>Optional</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTableLocalDetails"></a>

```python
foreign_table_local_details: DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssets#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.notebook"></a>

```python
notebook: DataDatabricksCleanRoomAssetsAssetsNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#notebook DataDatabricksCleanRoomAssets#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.table"></a>

```python
table: DataDatabricksCleanRoomAssetsAssetsTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#table DataDatabricksCleanRoomAssets#table}.

---

##### `table_local_details`<sup>Optional</sup> <a name="table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.tableLocalDetails"></a>

```python
table_local_details: DataDatabricksCleanRoomAssetsAssetsTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#table_local_details DataDatabricksCleanRoomAssets#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.view"></a>

```python
view: DataDatabricksCleanRoomAssetsAssetsView
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#view DataDatabricksCleanRoomAssets#view}.

---

##### `view_local_details`<sup>Optional</sup> <a name="view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.viewLocalDetails"></a>

```python
view_local_details: DataDatabricksCleanRoomAssetsAssetsViewLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#view_local_details DataDatabricksCleanRoomAssets#view_local_details}.

---

##### `volume_local_details`<sup>Optional</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.volumeLocalDetails"></a>

```python
volume_local_details: DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#volume_local_details DataDatabricksCleanRoomAssets#volume_local_details}.

---

### DataDatabricksCleanRoomAssetsAssetsForeignTable <a name="DataDatabricksCleanRoomAssetsAssetsForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable()
```


### DataDatabricksCleanRoomAssetsAssetsForeignTableColumns <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns(
  comment: str = None,
  mask: DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetsAssetsNotebook <a name="DataDatabricksCleanRoomAssetsAssetsNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook(
  notebook_content: str,
  runner_collaborator_aliases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.notebookContent">notebook_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#notebook_content DataDatabricksCleanRoomAssets#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.runnerCollaboratorAliases">runner_collaborator_aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssets#runner_collaborator_aliases}. |

---

##### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.notebookContent"></a>

```python
notebook_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#notebook_content DataDatabricksCleanRoomAssets#notebook_content}.

---

##### `runner_collaborator_aliases`<sup>Optional</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.runnerCollaboratorAliases"></a>

```python
runner_collaborator_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssets#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetsAssetsNotebookReviews <a name="DataDatabricksCleanRoomAssetsAssetsNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews(
  comment: str = None,
  created_at_millis: typing.Union[int, float] = None,
  reviewer_collaborator_alias: str = None,
  review_state: str = None,
  review_sub_reason: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.createdAtMillis">created_at_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#created_at_millis DataDatabricksCleanRoomAssets#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewerCollaboratorAlias">reviewer_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssets#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewState">review_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#review_state DataDatabricksCleanRoomAssets#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewSubReason">review_sub_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssets#review_sub_reason}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `created_at_millis`<sup>Optional</sup> <a name="created_at_millis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.createdAtMillis"></a>

```python
created_at_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#created_at_millis DataDatabricksCleanRoomAssets#created_at_millis}.

---

##### `reviewer_collaborator_alias`<sup>Optional</sup> <a name="reviewer_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewerCollaboratorAlias"></a>

```python
reviewer_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssets#reviewer_collaborator_alias}.

---

##### `review_state`<sup>Optional</sup> <a name="review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#review_state DataDatabricksCleanRoomAssets#review_state}.

---

##### `review_sub_reason`<sup>Optional</sup> <a name="review_sub_reason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewSubReason"></a>

```python
review_sub_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssets#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetsAssetsTable <a name="DataDatabricksCleanRoomAssetsAssetsTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable()
```


### DataDatabricksCleanRoomAssetsAssetsTableColumns <a name="DataDatabricksCleanRoomAssetsAssetsTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns(
  comment: str = None,
  mask: DataDatabricksCleanRoomAssetsAssetsTableColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetsAssetsTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetsAssetsTableColumnsMask <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetsAssetsTableLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails(
  local_name: str,
  partitions: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.partitions">partitions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partitions DataDatabricksCleanRoomAssets#partitions}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.partitions"></a>

```python
partitions: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partitions DataDatabricksCleanRoomAssets#partitions}.

---

### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions.property.value">value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions.property.value"></a>

```python
value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}.

---

### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue(
  name: str = None,
  op: str = None,
  recipient_property_key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.op">op</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#op DataDatabricksCleanRoomAssets#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssets#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.op"></a>

```python
op: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#op DataDatabricksCleanRoomAssets#op}.

---

##### `recipient_property_key`<sup>Optional</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssets#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}.

---

### DataDatabricksCleanRoomAssetsAssetsView <a name="DataDatabricksCleanRoomAssetsAssetsView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView()
```


### DataDatabricksCleanRoomAssetsAssetsViewColumns <a name="DataDatabricksCleanRoomAssetsAssetsViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns(
  comment: str = None,
  mask: DataDatabricksCleanRoomAssetsAssetsViewColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetsAssetsViewColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetsAssetsViewColumnsMask <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetsAssetsViewLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetsConfig <a name="DataDatabricksCleanRoomAssetsConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns">DataDatabricksCleanRoomAssetsAssetsForeignTableColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsForeignTableColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns">DataDatabricksCleanRoomAssetsAssetsForeignTableColumns</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>]

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns">DataDatabricksCleanRoomAssetsAssetsForeignTableColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetsAssetsForeignTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns">DataDatabricksCleanRoomAssetsAssetsForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>]

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.columns"></a>

```python
columns: DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsForeignTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>]

---


### DataDatabricksCleanRoomAssetsAssetsList <a name="DataDatabricksCleanRoomAssetsAssetsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets">DataDatabricksCleanRoomAssetsAssets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets">DataDatabricksCleanRoomAssetsAssets</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resetRunnerCollaboratorAliases">reset_runner_collaborator_aliases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_runner_collaborator_aliases` <a name="reset_runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```python
def reset_runner_collaborator_aliases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviews">reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList">DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContentInput">notebook_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliasesInput">runner_collaborator_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContent">notebook_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliases">runner_collaborator_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `reviews`<sup>Required</sup> <a name="reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviews"></a>

```python
reviews: DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList">DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList</a>

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `notebook_content_input`<sup>Optional</sup> <a name="notebook_content_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContentInput"></a>

```python
notebook_content_input: str
```

- *Type:* str

---

##### `runner_collaborator_aliases_input`<sup>Optional</sup> <a name="runner_collaborator_aliases_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```python
runner_collaborator_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContent"></a>

```python
notebook_content: str
```

- *Type:* str

---

##### `runner_collaborator_aliases`<sup>Required</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```python
runner_collaborator_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsNotebook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>]

---


### DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList <a name="DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews">DataDatabricksCleanRoomAssetsAssetsNotebookReviews</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsNotebookReviews]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews">DataDatabricksCleanRoomAssetsAssetsNotebookReviews</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetCreatedAtMillis">reset_created_at_millis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">reset_reviewer_collaborator_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewState">reset_review_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewSubReason">reset_review_sub_reason</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at_millis` <a name="reset_created_at_millis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```python
def reset_created_at_millis() -> None
```

##### `reset_reviewer_collaborator_alias` <a name="reset_reviewer_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```python
def reset_reviewer_collaborator_alias() -> None
```

##### `reset_review_state` <a name="reset_review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewState"></a>

```python
def reset_review_state() -> None
```

##### `reset_review_sub_reason` <a name="reset_review_sub_reason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewSubReason"></a>

```python
def reset_review_sub_reason() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillisInput">created_at_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">reviewer_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewStateInput">review_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReasonInput">review_sub_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillis">created_at_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">reviewer_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReason">review_sub_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews">DataDatabricksCleanRoomAssetsAssetsNotebookReviews</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_millis_input`<sup>Optional</sup> <a name="created_at_millis_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```python
created_at_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reviewer_collaborator_alias_input`<sup>Optional</sup> <a name="reviewer_collaborator_alias_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```python
reviewer_collaborator_alias_input: str
```

- *Type:* str

---

##### `review_state_input`<sup>Optional</sup> <a name="review_state_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewStateInput"></a>

```python
review_state_input: str
```

- *Type:* str

---

##### `review_sub_reason_input`<sup>Optional</sup> <a name="review_sub_reason_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```python
review_sub_reason_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at_millis`<sup>Required</sup> <a name="created_at_millis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillis"></a>

```python
created_at_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reviewer_collaborator_alias`<sup>Required</sup> <a name="reviewer_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```python
reviewer_collaborator_alias: str
```

- *Type:* str

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `review_sub_reason`<sup>Required</sup> <a name="review_sub_reason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReason"></a>

```python
review_sub_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetsAssetsNotebookReviews
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews">DataDatabricksCleanRoomAssetsAssetsNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetsAssetsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTable">put_foreign_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTableLocalDetails">put_foreign_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook">put_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails">put_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putViewLocalDetails">put_view_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putVolumeLocalDetails">put_volume_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetCleanRoomName">reset_clean_room_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTable">reset_foreign_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTableLocalDetails">reset_foreign_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetNotebook">reset_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTableLocalDetails">reset_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetView">reset_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetViewLocalDetails">reset_view_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetVolumeLocalDetails">reset_volume_local_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_foreign_table` <a name="put_foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTable"></a>

```python
def put_foreign_table() -> None
```

##### `put_foreign_table_local_details` <a name="put_foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTableLocalDetails"></a>

```python
def put_foreign_table_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTableLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

##### `put_notebook` <a name="put_notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook"></a>

```python
def put_notebook(
  notebook_content: str,
  runner_collaborator_aliases: typing.List[str] = None
) -> None
```

###### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook.parameter.notebookContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#notebook_content DataDatabricksCleanRoomAssets#notebook_content}.

---

###### `runner_collaborator_aliases`<sup>Optional</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook.parameter.runnerCollaboratorAliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssets#runner_collaborator_aliases}.

---

##### `put_table` <a name="put_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTable"></a>

```python
def put_table() -> None
```

##### `put_table_local_details` <a name="put_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails"></a>

```python
def put_table_local_details(
  local_name: str,
  partitions: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]] = None
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

###### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails.parameter.partitions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#partitions DataDatabricksCleanRoomAssets#partitions}.

---

##### `put_view` <a name="put_view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putView"></a>

```python
def put_view() -> None
```

##### `put_view_local_details` <a name="put_view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putViewLocalDetails"></a>

```python
def put_view_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putViewLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

##### `put_volume_local_details` <a name="put_volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putVolumeLocalDetails"></a>

```python
def put_volume_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putVolumeLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

##### `reset_clean_room_name` <a name="reset_clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetCleanRoomName"></a>

```python
def reset_clean_room_name() -> None
```

##### `reset_foreign_table` <a name="reset_foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTable"></a>

```python
def reset_foreign_table() -> None
```

##### `reset_foreign_table_local_details` <a name="reset_foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTableLocalDetails"></a>

```python
def reset_foreign_table_local_details() -> None
```

##### `reset_notebook` <a name="reset_notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetNotebook"></a>

```python
def reset_notebook() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_local_details` <a name="reset_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTableLocalDetails"></a>

```python
def reset_table_local_details() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetView"></a>

```python
def reset_view() -> None
```

##### `reset_view_local_details` <a name="reset_view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetViewLocalDetails"></a>

```python
def reset_view_local_details() -> None
```

##### `reset_volume_local_details` <a name="reset_volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetVolumeLocalDetails"></a>

```python
def reset_volume_local_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.addedAt">added_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference">DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.ownerCollaboratorAlias">owner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference">DataDatabricksCleanRoomAssetsAssetsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference">DataDatabricksCleanRoomAssetsAssetsViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomNameInput">clean_room_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableInput">foreign_table_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetailsInput">foreign_table_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebookInput">notebook_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetailsInput">table_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewInput">view_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetailsInput">view_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetailsInput">volume_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets">DataDatabricksCleanRoomAssetsAssets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `added_at`<sup>Required</sup> <a name="added_at" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.addedAt"></a>

```python
added_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `foreign_table`<sup>Required</sup> <a name="foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTable"></a>

```python
foreign_table: DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference</a>

---

##### `foreign_table_local_details`<sup>Required</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetails"></a>

```python
foreign_table_local_details: DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebook"></a>

```python
notebook: DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference">DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference</a>

---

##### `owner_collaborator_alias`<sup>Required</sup> <a name="owner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.ownerCollaboratorAlias"></a>

```python
owner_collaborator_alias: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.table"></a>

```python
table: DataDatabricksCleanRoomAssetsAssetsTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference">DataDatabricksCleanRoomAssetsAssetsTableOutputReference</a>

---

##### `table_local_details`<sup>Required</sup> <a name="table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetails"></a>

```python
table_local_details: DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.view"></a>

```python
view: DataDatabricksCleanRoomAssetsAssetsViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference">DataDatabricksCleanRoomAssetsAssetsViewOutputReference</a>

---

##### `view_local_details`<sup>Required</sup> <a name="view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetails"></a>

```python
view_local_details: DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference</a>

---

##### `volume_local_details`<sup>Required</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetails"></a>

```python
volume_local_details: DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference</a>

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `clean_room_name_input`<sup>Optional</sup> <a name="clean_room_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomNameInput"></a>

```python
clean_room_name_input: str
```

- *Type:* str

---

##### `foreign_table_input`<sup>Optional</sup> <a name="foreign_table_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableInput"></a>

```python
foreign_table_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsForeignTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>]

---

##### `foreign_table_local_details_input`<sup>Optional</sup> <a name="foreign_table_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetailsInput"></a>

```python
foreign_table_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebookInput"></a>

```python
notebook_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsNotebook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>]

---

##### `table_local_details_input`<sup>Optional</sup> <a name="table_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetailsInput"></a>

```python
table_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>]

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewInput"></a>

```python
view_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsView]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>]

---

##### `view_local_details_input`<sup>Optional</sup> <a name="view_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetailsInput"></a>

```python
view_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsViewLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>]

---

##### `volume_local_details_input`<sup>Optional</sup> <a name="volume_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetailsInput"></a>

```python
volume_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `clean_room_name`<sup>Required</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetsAssets
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets">DataDatabricksCleanRoomAssetsAssets</a>

---


### DataDatabricksCleanRoomAssetsAssetsTableColumnsList <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns">DataDatabricksCleanRoomAssetsAssetsTableColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns">DataDatabricksCleanRoomAssetsAssetsTableColumns</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>]

---


### DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns">DataDatabricksCleanRoomAssetsAssetsTableColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetsAssetsTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns">DataDatabricksCleanRoomAssetsAssetsTableColumns</a>

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.putPartitions">put_partitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resetPartitions">reset_partitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partitions` <a name="put_partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.putPartitions"></a>

```python
def put_partitions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]

---

##### `reset_partitions` <a name="reset_partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resetPartitions"></a>

```python
def reset_partitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitionsInput">partitions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitions"></a>

```python
partitions: DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList</a>

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `partitions_input`<sup>Optional</sup> <a name="partitions_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitionsInput"></a>

```python
partitions_input: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>]

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.putValue"></a>

```python
def put_value(
  value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.value"></a>

```python
value: DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions</a>]

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetOp">reset_op</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">reset_recipient_property_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_op` <a name="reset_op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```python
def reset_op() -> None
```

##### `reset_recipient_property_key` <a name="reset_recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```python
def reset_recipient_property_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">recipient_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `recipient_property_key_input`<sup>Optional</sup> <a name="recipient_property_key_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```python
recipient_property_key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `recipient_property_key`<sup>Required</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue</a>]

---


### DataDatabricksCleanRoomAssetsAssetsTableOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList">DataDatabricksCleanRoomAssetsAssetsTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.columns"></a>

```python
columns: DataDatabricksCleanRoomAssetsAssetsTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList">DataDatabricksCleanRoomAssetsAssetsTableColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>]

---


### DataDatabricksCleanRoomAssetsAssetsViewColumnsList <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns">DataDatabricksCleanRoomAssetsAssetsViewColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetsAssetsViewColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns">DataDatabricksCleanRoomAssetsAssetsViewColumns</a>]]

---


### DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsViewColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>]

---


### DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns">DataDatabricksCleanRoomAssetsAssetsViewColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsViewColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetsAssetsViewColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns">DataDatabricksCleanRoomAssetsAssetsViewColumns</a>

---


### DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsViewLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>]

---


### DataDatabricksCleanRoomAssetsAssetsViewOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList">DataDatabricksCleanRoomAssetsAssetsViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.columns"></a>

```python
columns: DataDatabricksCleanRoomAssetsAssetsViewColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList">DataDatabricksCleanRoomAssetsAssetsViewColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsView]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>]

---


### DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_assets

dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>]

---



