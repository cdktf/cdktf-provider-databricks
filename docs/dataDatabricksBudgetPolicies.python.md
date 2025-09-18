# `dataDatabricksBudgetPolicies` Submodule <a name="`dataDatabricksBudgetPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksBudgetPolicies <a name="DataDatabricksBudgetPolicies" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies databricks_budget_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksBudgetPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksBudgetPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksBudgetPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksBudgetPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksBudgetPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList">DataDatabricksBudgetPoliciesPoliciesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.policies"></a>

```python
policies: DataDatabricksBudgetPoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList">DataDatabricksBudgetPoliciesPoliciesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksBudgetPoliciesConfig <a name="DataDatabricksBudgetPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

### DataDatabricksBudgetPoliciesPolicies <a name="DataDatabricksBudgetPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies(
  binding_workspace_ids: typing.List[typing.Union[int, float]] = None,
  custom_tags: typing.Union[IResolvable, typing.List[DataDatabricksBudgetPoliciesPoliciesCustomTags]] = None,
  policy_id: str = None,
  policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.bindingWorkspaceIds">binding_workspace_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#binding_workspace_ids DataDatabricksBudgetPolicies#binding_workspace_ids}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.customTags">custom_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#custom_tags DataDatabricksBudgetPolicies#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#policy_id DataDatabricksBudgetPolicies#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#policy_name DataDatabricksBudgetPolicies#policy_name}. |

---

##### `binding_workspace_ids`<sup>Optional</sup> <a name="binding_workspace_ids" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.bindingWorkspaceIds"></a>

```python
binding_workspace_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#binding_workspace_ids DataDatabricksBudgetPolicies#binding_workspace_ids}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.customTags"></a>

```python
custom_tags: typing.Union[IResolvable, typing.List[DataDatabricksBudgetPoliciesPoliciesCustomTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#custom_tags DataDatabricksBudgetPolicies#custom_tags}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#policy_id DataDatabricksBudgetPolicies#policy_id}.

---

##### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#policy_name DataDatabricksBudgetPolicies#policy_name}.

---

### DataDatabricksBudgetPoliciesPoliciesCustomTags <a name="DataDatabricksBudgetPoliciesPoliciesCustomTags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#key DataDatabricksBudgetPolicies#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#value DataDatabricksBudgetPolicies#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#key DataDatabricksBudgetPolicies#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/budget_policies#value DataDatabricksBudgetPolicies#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksBudgetPoliciesPoliciesCustomTagsList <a name="DataDatabricksBudgetPoliciesPoliciesCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksBudgetPoliciesPoliciesCustomTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]

---


### DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference <a name="DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksBudgetPoliciesPoliciesCustomTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]

---


### DataDatabricksBudgetPoliciesPoliciesList <a name="DataDatabricksBudgetPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksBudgetPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksBudgetPoliciesPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a>]]

---


### DataDatabricksBudgetPoliciesPoliciesOutputReference <a name="DataDatabricksBudgetPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_budget_policies

dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.putCustomTags">put_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetBindingWorkspaceIds">reset_binding_workspace_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetPolicyName">reset_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_tags` <a name="put_custom_tags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.putCustomTags"></a>

```python
def put_custom_tags(
  value: typing.Union[IResolvable, typing.List[DataDatabricksBudgetPoliciesPoliciesCustomTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.putCustomTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]

---

##### `reset_binding_workspace_ids` <a name="reset_binding_workspace_ids" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetBindingWorkspaceIds"></a>

```python
def reset_binding_workspace_ids() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_policy_name` <a name="reset_policy_name" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.resetPolicyName"></a>

```python
def reset_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.customTags">custom_tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList">DataDatabricksBudgetPoliciesPoliciesCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.bindingWorkspaceIdsInput">binding_workspace_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.bindingWorkspaceIds">binding_workspace_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.customTags"></a>

```python
custom_tags: DataDatabricksBudgetPoliciesPoliciesCustomTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTagsList">DataDatabricksBudgetPoliciesPoliciesCustomTagsList</a>

---

##### `binding_workspace_ids_input`<sup>Optional</sup> <a name="binding_workspace_ids_input" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.bindingWorkspaceIdsInput"></a>

```python
binding_workspace_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.customTagsInput"></a>

```python
custom_tags_input: typing.Union[IResolvable, typing.List[DataDatabricksBudgetPoliciesPoliciesCustomTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesCustomTags">DataDatabricksBudgetPoliciesPoliciesCustomTags</a>]]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `binding_workspace_ids`<sup>Required</sup> <a name="binding_workspace_ids" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.bindingWorkspaceIds"></a>

```python
binding_workspace_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksBudgetPoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksBudgetPolicies.DataDatabricksBudgetPoliciesPolicies">DataDatabricksBudgetPoliciesPolicies</a>

---



