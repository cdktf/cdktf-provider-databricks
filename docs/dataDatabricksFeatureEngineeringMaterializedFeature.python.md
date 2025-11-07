# `dataDatabricksFeatureEngineeringMaterializedFeature` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeature` Submodule" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeature <a name="DataDatabricksFeatureEngineeringMaterializedFeature" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  materialized_feature_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.materializedFeatureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime">last_materialization_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState">pipeline_schedule_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput">materialized_feature_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `last_materialization_time`<sup>Required</sup> <a name="last_materialization_time" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```python
last_materialization_time: str
```

- *Type:* str

---

##### `offline_store_config`<sup>Required</sup> <a name="offline_store_config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```python
offline_store_config: DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `online_store_config`<sup>Required</sup> <a name="online_store_config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```python
online_store_config: DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `pipeline_schedule_state`<sup>Required</sup> <a name="pipeline_schedule_state" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```python
pipeline_schedule_state: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `materialized_feature_id_input`<sup>Optional</sup> <a name="materialized_feature_id_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput"></a>

```python
materialized_feature_id_input: str
```

- *Type:* str

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  materialized_feature_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig(
  catalog_name: str,
  schema_name: str,
  table_name_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig(
  capacity: str,
  name: str,
  read_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity">capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#capacity DataDatabricksFeatureEngineeringMaterializedFeature#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#name DataDatabricksFeatureEngineeringMaterializedFeature#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount">read_replica_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeature#read_replica_count}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#capacity DataDatabricksFeatureEngineeringMaterializedFeature#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#name DataDatabricksFeatureEngineeringMaterializedFeature#name}.

---

##### `read_replica_count`<sup>Optional</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount"></a>

```python
read_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_feature#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeature#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount">reset_read_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_replica_count` <a name="reset_read_replica_count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```python
def reset_read_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput">capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput">read_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount">read_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput"></a>

```python
capacity_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_replica_count_input`<sup>Optional</sup> <a name="read_replica_count_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```python
read_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_replica_count`<sup>Required</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```python
read_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---



