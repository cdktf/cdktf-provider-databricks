# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2 databricks_alerts_v2}.

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

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a></code> | *No description.* |

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

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts"></a>

```python
alerts: DataDatabricksAlertsV2AlertsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a>

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

### DataDatabricksAlertsV2Alerts <a name="DataDatabricksAlertsV2Alerts" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts(
  custom_description: str = None,
  custom_summary: str = None,
  display_name: str = None,
  evaluation: DataDatabricksAlertsV2AlertsEvaluation = None,
  parent_path: str = None,
  query_text: str = None,
  run_as: DataDatabricksAlertsV2AlertsRunAs = None,
  run_as_user_name: str = None,
  schedule: DataDatabricksAlertsV2AlertsSchedule = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customDescription">custom_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customSummary">custom_summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.queryText">query_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAs">run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as DataDatabricksAlertsV2#run_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAsUserName">run_as_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}. |

---

##### `custom_description`<sup>Optional</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customDescription"></a>

```python
custom_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}.

---

##### `custom_summary`<sup>Optional</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customSummary"></a>

```python
custom_summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}.

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.evaluation"></a>

```python
evaluation: DataDatabricksAlertsV2AlertsEvaluation
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}.

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}.

---

##### `run_as`<sup>Optional</sup> <a name="run_as" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAs"></a>

```python
run_as: DataDatabricksAlertsV2AlertsRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as DataDatabricksAlertsV2#run_as}.

---

##### `run_as_user_name`<sup>Optional</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAsUserName"></a>

```python
run_as_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.schedule"></a>

```python
schedule: DataDatabricksAlertsV2AlertsSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}.

---

### DataDatabricksAlertsV2AlertsEffectiveRunAs <a name="DataDatabricksAlertsV2AlertsEffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs(
  service_principal_name: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsEvaluation <a name="DataDatabricksAlertsV2AlertsEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation(
  comparison_operator: str = None,
  empty_result_state: str = None,
  notification: DataDatabricksAlertsV2AlertsEvaluationNotification = None,
  source: DataDatabricksAlertsV2AlertsEvaluationSource = None,
  threshold: DataDatabricksAlertsV2AlertsEvaluationThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification"></a>

```python
notification: DataDatabricksAlertsV2AlertsEvaluationNotification
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source"></a>

```python
source: DataDatabricksAlertsV2AlertsEvaluationSource
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold"></a>

```python
threshold: DataDatabricksAlertsV2AlertsEvaluationThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotification <a name="DataDatabricksAlertsV2AlertsEvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification(
  notify_on_ok: typing.Union[bool, IResolvable] = None,
  retrigger_seconds: typing.Union[int, float] = None,
  subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk">notify_on_ok</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds">retrigger_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `notify_on_ok`<sup>Optional</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk"></a>

```python
notify_on_ok: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `retrigger_seconds`<sup>Optional</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds"></a>

```python
retrigger_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions"></a>

```python
subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions(
  destination_id: str = None,
  user_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId">destination_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `destination_id`<sup>Optional</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `user_email`<sup>Optional</sup> <a name="user_email" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2AlertsEvaluationSource <a name="DataDatabricksAlertsV2AlertsEvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource(
  aggregation: str = None,
  display: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2AlertsEvaluationThreshold <a name="DataDatabricksAlertsV2AlertsEvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold(
  column: DataDatabricksAlertsV2AlertsEvaluationThresholdColumn = None,
  value: DataDatabricksAlertsV2AlertsEvaluationThresholdValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column"></a>

```python
column: DataDatabricksAlertsV2AlertsEvaluationThresholdColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value"></a>

```python
value: DataDatabricksAlertsV2AlertsEvaluationThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn(
  aggregation: str = None,
  display: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdValue <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue(
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2AlertsRunAs <a name="DataDatabricksAlertsV2AlertsRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs(
  service_principal_name: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsSchedule <a name="DataDatabricksAlertsV2AlertsSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule(
  pause_status: str = None,
  quartz_cron_schedule: str = None,
  timezone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus">pause_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule">quartz_cron_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |

---

##### `pause_status`<sup>Optional</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

##### `quartz_cron_schedule`<sup>Optional</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule"></a>

```python
quartz_cron_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `timezone_id`<sup>Optional</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

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

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName">reset_service_principal_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_principal_name` <a name="reset_service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```python
def reset_service_principal_name() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput">service_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_principal_name_input`<sup>Optional</sup> <a name="service_principal_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```python
service_principal_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAlertsV2AlertsEffectiveRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions">put_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk">reset_notify_on_ok</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds">reset_retrigger_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions">reset_subscriptions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subscriptions` <a name="put_subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions"></a>

```python
def put_subscriptions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]

---

##### `reset_notify_on_ok` <a name="reset_notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```python
def reset_notify_on_ok() -> None
```

##### `reset_retrigger_seconds` <a name="reset_retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```python
def reset_retrigger_seconds() -> None
```

##### `reset_subscriptions` <a name="reset_subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```python
def reset_subscriptions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput">notify_on_ok_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput">retrigger_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput">subscriptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk">notify_on_ok</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds">retrigger_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions"></a>

```python
subscriptions: DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a>

---

##### `notify_on_ok_input`<sup>Optional</sup> <a name="notify_on_ok_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```python
notify_on_ok_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retrigger_seconds_input`<sup>Optional</sup> <a name="retrigger_seconds_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```python
retrigger_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscriptions_input`<sup>Optional</sup> <a name="subscriptions_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```python
subscriptions_input: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]

---

##### `notify_on_ok`<sup>Required</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```python
notify_on_ok: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retrigger_seconds`<sup>Required</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```python
retrigger_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>]

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">reset_destination_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">reset_user_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_id` <a name="reset_destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```python
def reset_destination_id() -> None
```

##### `reset_user_email` <a name="reset_user_email" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```python
def reset_user_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destination_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_id_input`<sup>Optional</sup> <a name="destination_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```python
destination_id_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]

---


### DataDatabricksAlertsV2AlertsEvaluationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState">reset_empty_result_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification` <a name="put_notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification"></a>

```python
def put_notification(
  notify_on_ok: typing.Union[bool, IResolvable] = None,
  retrigger_seconds: typing.Union[int, float] = None,
  subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions]] = None
) -> None
```

###### `notify_on_ok`<sup>Optional</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.notifyOnOk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

###### `retrigger_seconds`<sup>Optional</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.retriggerSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

###### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.subscriptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource"></a>

```python
def put_source(
  aggregation: str = None,
  display: str = None,
  name: str = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

###### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `put_threshold` <a name="put_threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold"></a>

```python
def put_threshold(
  column: DataDatabricksAlertsV2AlertsEvaluationThresholdColumn = None,
  value: DataDatabricksAlertsV2AlertsEvaluationThresholdValue = None
) -> None
```

###### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold.parameter.column"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_empty_result_state` <a name="reset_empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState"></a>

```python
def reset_empty_result_state() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt">last_evaluated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput">empty_result_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_evaluated_at`<sup>Required</sup> <a name="last_evaluated_at" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```python
last_evaluated_at: str
```

- *Type:* str

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification"></a>

```python
notification: DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source"></a>

```python
source: DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold"></a>

```python
threshold: DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `empty_result_state_input`<sup>Optional</sup> <a name="empty_result_state_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput"></a>

```python
empty_result_state_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `empty_result_state`<sup>Required</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>]

---


### DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_display` <a name="reset_display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>]

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_display` <a name="reset_display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationThresholdColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>]

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column` <a name="put_column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn"></a>

```python
def put_column(
  aggregation: str = None,
  display: str = None,
  name: str = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

###### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue"></a>

```python
def put_value(
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.boolValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

##### `reset_column` <a name="reset_column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput">column_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column"></a>

```python
column: DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value"></a>

```python
value: DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput"></a>

```python
column_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationThresholdColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationThresholdValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>]

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluationThresholdValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>]

---


### DataDatabricksAlertsV2AlertsList <a name="DataDatabricksAlertsV2AlertsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAlertsV2AlertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksAlertsV2Alerts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>]]

---


### DataDatabricksAlertsV2AlertsOutputReference <a name="DataDatabricksAlertsV2AlertsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation">put_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs">put_run_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomDescription">reset_custom_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomSummary">reset_custom_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetEvaluation">reset_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetParentPath">reset_parent_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetQueryText">reset_query_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAs">reset_run_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAsUserName">reset_run_as_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_evaluation` <a name="put_evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation"></a>

```python
def put_evaluation(
  comparison_operator: str = None,
  empty_result_state: str = None,
  notification: DataDatabricksAlertsV2AlertsEvaluationNotification = None,
  source: DataDatabricksAlertsV2AlertsEvaluationSource = None,
  threshold: DataDatabricksAlertsV2AlertsEvaluationThreshold = None
) -> None
```

###### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation.parameter.comparisonOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

###### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation.parameter.emptyResultState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

###### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation.parameter.notification"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation.parameter.threshold"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

##### `put_run_as` <a name="put_run_as" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs"></a>

```python
def put_run_as(
  service_principal_name: str = None,
  user_name: str = None
) -> None
```

###### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs.parameter.servicePrincipalName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule"></a>

```python
def put_schedule(
  pause_status: str = None,
  quartz_cron_schedule: str = None,
  timezone_id: str = None
) -> None
```

###### `pause_status`<sup>Optional</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule.parameter.pauseStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

###### `quartz_cron_schedule`<sup>Optional</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule.parameter.quartzCronSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

###### `timezone_id`<sup>Optional</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

##### `reset_custom_description` <a name="reset_custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomDescription"></a>

```python
def reset_custom_description() -> None
```

##### `reset_custom_summary` <a name="reset_custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomSummary"></a>

```python
def reset_custom_summary() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_evaluation` <a name="reset_evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetEvaluation"></a>

```python
def reset_evaluation() -> None
```

##### `reset_parent_path` <a name="reset_parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetParentPath"></a>

```python
def reset_parent_path() -> None
```

##### `reset_query_text` <a name="reset_query_text" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetQueryText"></a>

```python
def reset_query_text() -> None
```

##### `reset_run_as` <a name="reset_run_as" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAs"></a>

```python
def reset_run_as() -> None
```

##### `reset_run_as_user_name` <a name="reset_run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAsUserName"></a>

```python
def reset_run_as_user_name() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs">effective_run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs">run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescriptionInput">custom_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummaryInput">custom_summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluationInput">evaluation_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPathInput">parent_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsInput">run_as_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserNameInput">run_as_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription">custom_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary">custom_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName">run_as_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_run_as`<sup>Required</sup> <a name="effective_run_as" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs"></a>

```python
effective_run_as: DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation"></a>

```python
evaluation: DataDatabricksAlertsV2AlertsEvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `run_as`<sup>Required</sup> <a name="run_as" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs"></a>

```python
run_as: DataDatabricksAlertsV2AlertsRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule"></a>

```python
schedule: DataDatabricksAlertsV2AlertsScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_description_input`<sup>Optional</sup> <a name="custom_description_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescriptionInput"></a>

```python
custom_description_input: str
```

- *Type:* str

---

##### `custom_summary_input`<sup>Optional</sup> <a name="custom_summary_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummaryInput"></a>

```python
custom_summary_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluationInput"></a>

```python
evaluation_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>]

---

##### `parent_path_input`<sup>Optional</sup> <a name="parent_path_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPathInput"></a>

```python
parent_path_input: str
```

- *Type:* str

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `run_as_input`<sup>Optional</sup> <a name="run_as_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsInput"></a>

```python
run_as_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsRunAs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>]

---

##### `run_as_user_name_input`<sup>Optional</sup> <a name="run_as_user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserNameInput"></a>

```python
run_as_user_name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>]

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `custom_description`<sup>Required</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription"></a>

```python
custom_description: str
```

- *Type:* str

---

##### `custom_summary`<sup>Required</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary"></a>

```python
custom_summary: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `run_as_user_name`<sup>Required</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName"></a>

```python
run_as_user_name: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAlertsV2Alerts
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>

---


### DataDatabricksAlertsV2AlertsRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName">reset_service_principal_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_principal_name` <a name="reset_service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName"></a>

```python
def reset_service_principal_name() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput">service_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_principal_name_input`<sup>Optional</sup> <a name="service_principal_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput"></a>

```python
service_principal_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsRunAs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>]

---


### DataDatabricksAlertsV2AlertsScheduleOutputReference <a name="DataDatabricksAlertsV2AlertsScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alerts_v2

dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus">reset_pause_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetQuartzCronSchedule">reset_quartz_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetTimezoneId">reset_timezone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pause_status` <a name="reset_pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus"></a>

```python
def reset_pause_status() -> None
```

##### `reset_quartz_cron_schedule` <a name="reset_quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetQuartzCronSchedule"></a>

```python
def reset_quartz_cron_schedule() -> None
```

##### `reset_timezone_id` <a name="reset_timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetTimezoneId"></a>

```python
def reset_timezone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput">pause_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput">quartz_cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule">quartz_cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status_input`<sup>Optional</sup> <a name="pause_status_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput"></a>

```python
pause_status_input: str
```

- *Type:* str

---

##### `quartz_cron_schedule_input`<sup>Optional</sup> <a name="quartz_cron_schedule_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```python
quartz_cron_schedule_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_schedule`<sup>Required</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule"></a>

```python
quartz_cron_schedule: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertsV2AlertsSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>]

---



