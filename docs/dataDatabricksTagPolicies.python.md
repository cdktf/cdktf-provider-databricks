# `dataDatabricksTagPolicies` Submodule <a name="`dataDatabricksTagPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksTagPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksTagPolicies <a name="DataDatabricksTagPolicies" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies databricks_tag_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksTagPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksTagPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksTagPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksTagPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksTagPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tagPolicies">tag_policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList">DataDatabricksTagPoliciesTagPoliciesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `tag_policies`<sup>Required</sup> <a name="tag_policies" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tagPolicies"></a>

```python
tag_policies: DataDatabricksTagPoliciesTagPoliciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList">DataDatabricksTagPoliciesTagPoliciesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksTagPoliciesConfig <a name="DataDatabricksTagPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

### DataDatabricksTagPoliciesTagPolicies <a name="DataDatabricksTagPoliciesTagPolicies" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies(
  tag_key: str,
  description: str = None,
  values: IResolvable | typing.List[DataDatabricksTagPoliciesTagPoliciesValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#tag_key DataDatabricksTagPolicies#tag_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#description DataDatabricksTagPolicies#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.values">values</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#values DataDatabricksTagPolicies#values}. |

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#tag_key DataDatabricksTagPolicies#tag_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#description DataDatabricksTagPolicies#description}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.values"></a>

```python
values: IResolvable | typing.List[DataDatabricksTagPoliciesTagPoliciesValues]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#values DataDatabricksTagPolicies#values}.

---

### DataDatabricksTagPoliciesTagPoliciesValues <a name="DataDatabricksTagPoliciesTagPoliciesValues" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#name DataDatabricksTagPolicies#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/tag_policies#name DataDatabricksTagPolicies#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksTagPoliciesTagPoliciesList <a name="DataDatabricksTagPoliciesTagPoliciesList" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksTagPoliciesTagPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksTagPoliciesTagPolicies]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a>]

---


### DataDatabricksTagPoliciesTagPoliciesOutputReference <a name="DataDatabricksTagPoliciesTagPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values` <a name="put_values" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.putValues"></a>

```python
def put_values(
  value: IResolvable | typing.List[DataDatabricksTagPoliciesTagPoliciesValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.putValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList">DataDatabricksTagPoliciesTagPoliciesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.valuesInput">values_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.values"></a>

```python
values: DataDatabricksTagPoliciesTagPoliciesValuesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList">DataDatabricksTagPoliciesTagPoliciesValuesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.valuesInput"></a>

```python
values_input: IResolvable | typing.List[DataDatabricksTagPoliciesTagPoliciesValues]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksTagPoliciesTagPolicies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a>

---


### DataDatabricksTagPoliciesTagPoliciesValuesList <a name="DataDatabricksTagPoliciesTagPoliciesValuesList" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksTagPoliciesTagPoliciesValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksTagPoliciesTagPoliciesValues]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]

---


### DataDatabricksTagPoliciesTagPoliciesValuesOutputReference <a name="DataDatabricksTagPoliciesTagPoliciesValuesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksTagPoliciesTagPoliciesValues
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>

---



