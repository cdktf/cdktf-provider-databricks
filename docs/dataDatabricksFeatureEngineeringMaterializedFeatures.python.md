# `dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features databricks_feature_engineering_materialized_features}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_name: str = None,
  page_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `feature_name`<sup>Optional</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.featureName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName">reset_feature_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_feature_name` <a name="reset_feature_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName"></a>

```python
def reset_feature_name() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeatures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures">materialized_features</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `materialized_features`<sup>Required</sup> <a name="materialized_features" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures"></a>

```python
materialized_features: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a>

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_name: str = None,
  page_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `feature_name`<sup>Optional</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures(
  materialized_feature_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}. |

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig(
  catalog_name: str,
  schema_name: str,
  table_name_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}.

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig(
  capacity: str,
  name: str,
  read_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity">capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount">read_replica_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}.

---

##### `read_replica_count`<sup>Optional</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount"></a>

```python
read_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>]

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount">reset_read_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_replica_count` <a name="reset_read_replica_count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```python
def reset_read_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput">capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput">read_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount">read_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput"></a>

```python
capacity_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_replica_count_input`<sup>Optional</sup> <a name="read_replica_count_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```python
read_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_replica_count`<sup>Required</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```python
read_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_feature_engineering_materialized_features

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime">last_materialization_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState">pipeline_schedule_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput">materialized_feature_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `last_materialization_time`<sup>Required</sup> <a name="last_materialization_time" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime"></a>

```python
last_materialization_time: str
```

- *Type:* str

---

##### `offline_store_config`<sup>Required</sup> <a name="offline_store_config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig"></a>

```python
offline_store_config: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a>

---

##### `online_store_config`<sup>Required</sup> <a name="online_store_config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig"></a>

```python
online_store_config: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a>

---

##### `pipeline_schedule_state`<sup>Required</sup> <a name="pipeline_schedule_state" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState"></a>

```python
pipeline_schedule_state: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `materialized_feature_id_input`<sup>Optional</sup> <a name="materialized_feature_id_input" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput"></a>

```python
materialized_feature_id_input: str
```

- *Type:* str

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>

---



