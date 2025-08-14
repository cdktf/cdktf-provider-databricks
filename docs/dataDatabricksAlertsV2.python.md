# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2 databricks_alerts_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAlertsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAlertsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.results">results</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList">DataDatabricksAlertsV2ResultsList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.results"></a>

```python
results: DataDatabricksAlertsV2ResultsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList">DataDatabricksAlertsV2ResultsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertsV2Config <a name="DataDatabricksAlertsV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2Config(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

### DataDatabricksAlertsV2Results <a name="DataDatabricksAlertsV2Results" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2Results(
  custom_description: str = None,
  custom_summary: str = None,
  display_name: str = None,
  evaluation: DataDatabricksAlertsV2ResultsEvaluation = None,
  parent_path: str = None,
  query_text: str = None,
  run_as_user_name: str = None,
  schedule: DataDatabricksAlertsV2ResultsSchedule = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customDescription">custom_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customSummary">custom_summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.queryText">query_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.runAsUserName">run_as_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}. |

---

##### `custom_description`<sup>Optional</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customDescription"></a>

```python
custom_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}.

---

##### `custom_summary`<sup>Optional</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.customSummary"></a>

```python
custom_summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}.

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.evaluation"></a>

```python
evaluation: DataDatabricksAlertsV2ResultsEvaluation
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}.

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}.

---

##### `run_as_user_name`<sup>Optional</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.runAsUserName"></a>

```python
run_as_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.schedule"></a>

```python
schedule: DataDatabricksAlertsV2ResultsSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}.

---

### DataDatabricksAlertsV2ResultsEvaluation <a name="DataDatabricksAlertsV2ResultsEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation(
  comparison_operator: str = None,
  empty_result_state: str = None,
  notification: DataDatabricksAlertsV2ResultsEvaluationNotification = None,
  source: DataDatabricksAlertsV2ResultsEvaluationSource = None,
  threshold: DataDatabricksAlertsV2ResultsEvaluationThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.notification"></a>

```python
notification: DataDatabricksAlertsV2ResultsEvaluationNotification
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.source"></a>

```python
source: DataDatabricksAlertsV2ResultsEvaluationSource
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation.property.threshold"></a>

```python
threshold: DataDatabricksAlertsV2ResultsEvaluationThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2ResultsEvaluationNotification <a name="DataDatabricksAlertsV2ResultsEvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification(
  notify_on_ok: typing.Union[bool, IResolvable] = None,
  retrigger_seconds: typing.Union[int, float] = None,
  subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.notifyOnOk">notify_on_ok</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.retriggerSeconds">retrigger_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `notify_on_ok`<sup>Optional</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.notifyOnOk"></a>

```python
notify_on_ok: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `retrigger_seconds`<sup>Optional</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.retriggerSeconds"></a>

```python
retrigger_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification.property.subscriptions"></a>

```python
subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions(
  destination_id: str = None,
  user_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.destinationId">destination_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `destination_id`<sup>Optional</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `user_email`<sup>Optional</sup> <a name="user_email" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2ResultsEvaluationSource <a name="DataDatabricksAlertsV2ResultsEvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource(
  aggregation: str = None,
  display: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2ResultsEvaluationThreshold <a name="DataDatabricksAlertsV2ResultsEvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold(
  column: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn = None,
  value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.column"></a>

```python
column: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold.property.value"></a>

```python
value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2ResultsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn(
  aggregation: str = None,
  display: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2ResultsEvaluationThresholdValue <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue(
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2ResultsSchedule <a name="DataDatabricksAlertsV2ResultsSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule(
  pause_status: str = None,
  quartz_cron_schedule: str = None,
  timezone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.pauseStatus">pause_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.quartzCronSchedule">quartz_cron_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |

---

##### `pause_status`<sup>Optional</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

##### `quartz_cron_schedule`<sup>Optional</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.quartzCronSchedule"></a>

```python
quartz_cron_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `timezone_id`<sup>Optional</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.putSubscriptions">put_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetNotifyOnOk">reset_notify_on_ok</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetRetriggerSeconds">reset_retrigger_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetSubscriptions">reset_subscriptions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subscriptions` <a name="put_subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.putSubscriptions"></a>

```python
def put_subscriptions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]

---

##### `reset_notify_on_ok` <a name="reset_notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```python
def reset_notify_on_ok() -> None
```

##### `reset_retrigger_seconds` <a name="reset_retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```python
def reset_retrigger_seconds() -> None
```

##### `reset_subscriptions` <a name="reset_subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```python
def reset_subscriptions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOkInput">notify_on_ok_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSecondsInput">retrigger_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptionsInput">subscriptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOk">notify_on_ok</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSeconds">retrigger_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptions"></a>

```python
subscriptions: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList</a>

---

##### `notify_on_ok_input`<sup>Optional</sup> <a name="notify_on_ok_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```python
notify_on_ok_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retrigger_seconds_input`<sup>Optional</sup> <a name="retrigger_seconds_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```python
retrigger_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscriptions_input`<sup>Optional</sup> <a name="subscriptions_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```python
subscriptions_input: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]

---

##### `notify_on_ok`<sup>Required</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```python
notify_on_ok: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retrigger_seconds`<sup>Required</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```python
retrigger_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>]

---


### DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]

---


### DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">reset_destination_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">reset_user_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_id` <a name="reset_destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```python
def reset_destination_id() -> None
```

##### `reset_user_email` <a name="reset_user_email" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```python
def reset_user_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destination_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_id_input`<sup>Optional</sup> <a name="destination_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```python
destination_id_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]

---


### DataDatabricksAlertsV2ResultsEvaluationOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetEmptyResultState">reset_empty_result_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification` <a name="put_notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification"></a>

```python
def put_notification(
  notify_on_ok: typing.Union[bool, IResolvable] = None,
  retrigger_seconds: typing.Union[int, float] = None,
  subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions]] = None
) -> None
```

###### `notify_on_ok`<sup>Optional</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification.parameter.notifyOnOk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

###### `retrigger_seconds`<sup>Optional</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification.parameter.retriggerSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

###### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putNotification.parameter.subscriptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource"></a>

```python
def put_source(
  aggregation: str = None,
  display: str = None,
  name: str = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

###### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putSource.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `put_threshold` <a name="put_threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold"></a>

```python
def put_threshold(
  column: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn = None,
  value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue = None
) -> None
```

###### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold.parameter.column"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_empty_result_state` <a name="reset_empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetEmptyResultState"></a>

```python
def reset_empty_result_state() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.lastEvaluatedAt">last_evaluated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference">DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference">DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultStateInput">empty_result_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_evaluated_at`<sup>Required</sup> <a name="last_evaluated_at" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```python
last_evaluated_at: str
```

- *Type:* str

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notification"></a>

```python
notification: DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference">DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.source"></a>

```python
source: DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference">DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.threshold"></a>

```python
threshold: DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `empty_result_state_input`<sup>Optional</sup> <a name="empty_result_state_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultStateInput"></a>

```python
empty_result_state_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `empty_result_state`<sup>Required</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>]

---


### DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_display` <a name="reset_display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>]

---


### DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_display` <a name="reset_display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationThresholdColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>]

---


### DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column` <a name="put_column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn"></a>

```python
def put_column(
  aggregation: str = None,
  display: str = None,
  name: str = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

###### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putColumn.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue"></a>

```python
def put_value(
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue.parameter.boolValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

##### `reset_column` <a name="reset_column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.columnInput">column_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.column"></a>

```python
column: DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.value"></a>

```python
value: DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.columnInput"></a>

```python
column_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationThresholdColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdColumn">DataDatabricksAlertsV2ResultsEvaluationThresholdColumn</a>]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationThresholdValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>]

---


### DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluationThresholdValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThresholdValue">DataDatabricksAlertsV2ResultsEvaluationThresholdValue</a>]

---


### DataDatabricksAlertsV2ResultsList <a name="DataDatabricksAlertsV2ResultsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAlertsV2ResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2Results]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a>]]

---


### DataDatabricksAlertsV2ResultsOutputReference <a name="DataDatabricksAlertsV2ResultsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation">put_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomDescription">reset_custom_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomSummary">reset_custom_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetEvaluation">reset_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetParentPath">reset_parent_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetQueryText">reset_query_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetRunAsUserName">reset_run_as_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_evaluation` <a name="put_evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation"></a>

```python
def put_evaluation(
  comparison_operator: str = None,
  empty_result_state: str = None,
  notification: DataDatabricksAlertsV2ResultsEvaluationNotification = None,
  source: DataDatabricksAlertsV2ResultsEvaluationSource = None,
  threshold: DataDatabricksAlertsV2ResultsEvaluationThreshold = None
) -> None
```

###### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation.parameter.comparisonOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

###### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation.parameter.emptyResultState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

###### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation.parameter.notification"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationNotification">DataDatabricksAlertsV2ResultsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationSource">DataDatabricksAlertsV2ResultsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putEvaluation.parameter.threshold"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationThreshold">DataDatabricksAlertsV2ResultsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule"></a>

```python
def put_schedule(
  pause_status: str = None,
  quartz_cron_schedule: str = None,
  timezone_id: str = None
) -> None
```

###### `pause_status`<sup>Optional</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule.parameter.pauseStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

###### `quartz_cron_schedule`<sup>Optional</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule.parameter.quartzCronSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

###### `timezone_id`<sup>Optional</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

##### `reset_custom_description` <a name="reset_custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomDescription"></a>

```python
def reset_custom_description() -> None
```

##### `reset_custom_summary` <a name="reset_custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetCustomSummary"></a>

```python
def reset_custom_summary() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_evaluation` <a name="reset_evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetEvaluation"></a>

```python
def reset_evaluation() -> None
```

##### `reset_parent_path` <a name="reset_parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetParentPath"></a>

```python
def reset_parent_path() -> None
```

##### `reset_query_text` <a name="reset_query_text" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetQueryText"></a>

```python
def reset_query_text() -> None
```

##### `reset_run_as_user_name` <a name="reset_run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetRunAsUserName"></a>

```python
def reset_run_as_user_name() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference">DataDatabricksAlertsV2ResultsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference">DataDatabricksAlertsV2ResultsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescriptionInput">custom_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummaryInput">custom_summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluationInput">evaluation_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPathInput">parent_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.runAsUserNameInput">run_as_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescription">custom_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummary">custom_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.runAsUserName">run_as_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluation"></a>

```python
evaluation: DataDatabricksAlertsV2ResultsEvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluationOutputReference">DataDatabricksAlertsV2ResultsEvaluationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.schedule"></a>

```python
schedule: DataDatabricksAlertsV2ResultsScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference">DataDatabricksAlertsV2ResultsScheduleOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_description_input`<sup>Optional</sup> <a name="custom_description_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescriptionInput"></a>

```python
custom_description_input: str
```

- *Type:* str

---

##### `custom_summary_input`<sup>Optional</sup> <a name="custom_summary_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummaryInput"></a>

```python
custom_summary_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.evaluationInput"></a>

```python
evaluation_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsEvaluation">DataDatabricksAlertsV2ResultsEvaluation</a>]

---

##### `parent_path_input`<sup>Optional</sup> <a name="parent_path_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPathInput"></a>

```python
parent_path_input: str
```

- *Type:* str

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `run_as_user_name_input`<sup>Optional</sup> <a name="run_as_user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.runAsUserNameInput"></a>

```python
run_as_user_name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>]

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `custom_description`<sup>Required</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customDescription"></a>

```python
custom_description: str
```

- *Type:* str

---

##### `custom_summary`<sup>Required</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.customSummary"></a>

```python
custom_summary: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `run_as_user_name`<sup>Required</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.runAsUserName"></a>

```python
run_as_user_name: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAlertsV2Results
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Results">DataDatabricksAlertsV2Results</a>

---


### DataDatabricksAlertsV2ResultsScheduleOutputReference <a name="DataDatabricksAlertsV2ResultsScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetPauseStatus">reset_pause_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetQuartzCronSchedule">reset_quartz_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetTimezoneId">reset_timezone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pause_status` <a name="reset_pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetPauseStatus"></a>

```python
def reset_pause_status() -> None
```

##### `reset_quartz_cron_schedule` <a name="reset_quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetQuartzCronSchedule"></a>

```python
def reset_quartz_cron_schedule() -> None
```

##### `reset_timezone_id` <a name="reset_timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.resetTimezoneId"></a>

```python
def reset_timezone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatusInput">pause_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronScheduleInput">quartz_cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronSchedule">quartz_cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status_input`<sup>Optional</sup> <a name="pause_status_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatusInput"></a>

```python
pause_status_input: str
```

- *Type:* str

---

##### `quartz_cron_schedule_input`<sup>Optional</sup> <a name="quartz_cron_schedule_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```python
quartz_cron_schedule_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_schedule`<sup>Required</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.quartzCronSchedule"></a>

```python
quartz_cron_schedule: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2ResultsSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ResultsSchedule">DataDatabricksAlertsV2ResultsSchedule</a>]

---



