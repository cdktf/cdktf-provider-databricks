# `dataDatabricksRfaAccessRequestDestinations` Submodule <a name="`dataDatabricksRfaAccessRequestDestinations` Submodule" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRfaAccessRequestDestinations <a name="DataDatabricksRfaAccessRequestDestinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksRfaAccessRequestDestinations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksRfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.areAnyDestinationsHidden">are_any_destinations_hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList">DataDatabricksRfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securable">securable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `are_any_destinations_hidden`<sup>Required</sup> <a name="are_any_destinations_hidden" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```python
are_any_destinations_hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinations"></a>

```python
destinations: DataDatabricksRfaAccessRequestDestinationsDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList">DataDatabricksRfaAccessRequestDestinationsDestinationsList</a>

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securable"></a>

```python
securable: DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRfaAccessRequestDestinationsConfig <a name="DataDatabricksRfaAccessRequestDestinationsConfig" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

### DataDatabricksRfaAccessRequestDestinationsDestinations <a name="DataDatabricksRfaAccessRequestDestinationsDestinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations(
  destination_id: str = None,
  destination_type: str = None,
  special_destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationId">destination_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.specialDestination">special_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}. |

---

##### `destination_id`<sup>Optional</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}.

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}.

---

##### `special_destination`<sup>Optional</sup> <a name="special_destination" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```python
special_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}.

---

### DataDatabricksRfaAccessRequestDestinationsSecurable <a name="DataDatabricksRfaAccessRequestDestinationsSecurable" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable(
  full_name: str = None,
  provider_share: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.providerShare">provider_share</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}. |

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}.

---

##### `provider_share`<sup>Optional</sup> <a name="provider_share" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```python
provider_share: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRfaAccessRequestDestinationsDestinationsList <a name="DataDatabricksRfaAccessRequestDestinationsDestinationsList" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksRfaAccessRequestDestinationsDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>]

---


### DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">reset_destination_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">reset_special_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_id` <a name="reset_destination_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```python
def reset_destination_id() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_special_destination` <a name="reset_special_destination" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```python
def reset_special_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">destination_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">special_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">special_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_id_input`<sup>Optional</sup> <a name="destination_id_input" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```python
destination_id_input: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `special_destination_input`<sup>Optional</sup> <a name="special_destination_input" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```python
special_destination_input: str
```

- *Type:* str

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `special_destination`<sup>Required</sup> <a name="special_destination" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```python
special_destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksRfaAccessRequestDestinationsDestinations
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>

---


### DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_rfa_access_request_destinations

dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">reset_provider_share</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_provider_share` <a name="reset_provider_share" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```python
def reset_provider_share() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">provider_share_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">provider_share</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `provider_share_input`<sup>Optional</sup> <a name="provider_share_input" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```python
provider_share_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `provider_share`<sup>Required</sup> <a name="provider_share" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```python
provider_share: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksRfaAccessRequestDestinationsSecurable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a>

---



