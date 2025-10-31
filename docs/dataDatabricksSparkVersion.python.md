# `dataDatabricksSparkVersion` Submodule <a name="`dataDatabricksSparkVersion` Submodule" id="@cdktf/provider-databricks.dataDatabricksSparkVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSparkVersion <a name="DataDatabricksSparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version databricks_spark_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  beta: bool | IResolvable = None,
  genomics: bool | IResolvable = None,
  gpu: bool | IResolvable = None,
  graviton: bool | IResolvable = None,
  id: str = None,
  latest: bool | IResolvable = None,
  long_term_support: bool | IResolvable = None,
  ml: bool | IResolvable = None,
  photon: bool | IResolvable = None,
  provider_config: DataDatabricksSparkVersionProviderConfig = None,
  scala: str = None,
  spark_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.beta">beta</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.genomics">genomics</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.gpu">gpu</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.graviton">graviton</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.latest">latest</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.longTermSupport">long_term_support</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.ml">ml</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.photon">photon</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scala">scala</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.beta"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}.

---

##### `genomics`<sup>Optional</sup> <a name="genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.genomics"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.gpu"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.graviton"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.latest"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}.

---

##### `long_term_support`<sup>Optional</sup> <a name="long_term_support" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.longTermSupport"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}.

---

##### `ml`<sup>Optional</sup> <a name="ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.ml"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}.

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.photon"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#provider_config DataDatabricksSparkVersion#provider_config}

---

##### `scala`<sup>Optional</sup> <a name="scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scala"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}.

---

##### `spark_version`<sup>Optional</sup> <a name="spark_version" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.sparkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta">reset_beta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics">reset_genomics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu">reset_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton">reset_graviton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest">reset_latest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport">reset_long_term_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl">reset_ml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton">reset_photon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala">reset_scala</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion">reset_spark_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#workspace_id DataDatabricksSparkVersion#workspace_id}.

---

##### `reset_beta` <a name="reset_beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta"></a>

```python
def reset_beta() -> None
```

##### `reset_genomics` <a name="reset_genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics"></a>

```python
def reset_genomics() -> None
```

##### `reset_gpu` <a name="reset_gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu"></a>

```python
def reset_gpu() -> None
```

##### `reset_graviton` <a name="reset_graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton"></a>

```python
def reset_graviton() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_latest` <a name="reset_latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest"></a>

```python
def reset_latest() -> None
```

##### `reset_long_term_support` <a name="reset_long_term_support" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport"></a>

```python
def reset_long_term_support() -> None
```

##### `reset_ml` <a name="reset_ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl"></a>

```python
def reset_ml() -> None
```

##### `reset_photon` <a name="reset_photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton"></a>

```python
def reset_photon() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_scala` <a name="reset_scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala"></a>

```python
def reset_scala() -> None
```

##### `reset_spark_version` <a name="reset_spark_version" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion"></a>

```python
def reset_spark_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksSparkVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksSparkVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSparkVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSparkVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSparkVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference">DataDatabricksSparkVersionProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput">beta_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput">genomics_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput">gpu_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput">graviton_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput">latest_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput">long_term_support_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput">ml_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput">photon_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput">scala_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput">spark_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta">beta</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics">genomics</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu">gpu</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton">graviton</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest">latest</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport">long_term_support</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml">ml</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon">photon</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala">scala</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion">spark_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfig"></a>

```python
provider_config: DataDatabricksSparkVersionProviderConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference">DataDatabricksSparkVersionProviderConfigOutputReference</a>

---

##### `beta_input`<sup>Optional</sup> <a name="beta_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput"></a>

```python
beta_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `genomics_input`<sup>Optional</sup> <a name="genomics_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput"></a>

```python
genomics_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `gpu_input`<sup>Optional</sup> <a name="gpu_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput"></a>

```python
gpu_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `graviton_input`<sup>Optional</sup> <a name="graviton_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput"></a>

```python
graviton_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `latest_input`<sup>Optional</sup> <a name="latest_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput"></a>

```python
latest_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `long_term_support_input`<sup>Optional</sup> <a name="long_term_support_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput"></a>

```python
long_term_support_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ml_input`<sup>Optional</sup> <a name="ml_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput"></a>

```python
ml_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `photon_input`<sup>Optional</sup> <a name="photon_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput"></a>

```python
photon_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.providerConfigInput"></a>

```python
provider_config_input: DataDatabricksSparkVersionProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

---

##### `scala_input`<sup>Optional</sup> <a name="scala_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput"></a>

```python
scala_input: str
```

- *Type:* str

---

##### `spark_version_input`<sup>Optional</sup> <a name="spark_version_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput"></a>

```python
spark_version_input: str
```

- *Type:* str

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta"></a>

```python
beta: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `genomics`<sup>Required</sup> <a name="genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics"></a>

```python
genomics: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu"></a>

```python
gpu: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `graviton`<sup>Required</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton"></a>

```python
graviton: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest"></a>

```python
latest: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `long_term_support`<sup>Required</sup> <a name="long_term_support" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport"></a>

```python
long_term_support: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ml`<sup>Required</sup> <a name="ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml"></a>

```python
ml: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `photon`<sup>Required</sup> <a name="photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon"></a>

```python
photon: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `scala`<sup>Required</sup> <a name="scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala"></a>

```python
scala: str
```

- *Type:* str

---

##### `spark_version`<sup>Required</sup> <a name="spark_version" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSparkVersionConfig <a name="DataDatabricksSparkVersionConfig" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  beta: bool | IResolvable = None,
  genomics: bool | IResolvable = None,
  gpu: bool | IResolvable = None,
  graviton: bool | IResolvable = None,
  id: str = None,
  latest: bool | IResolvable = None,
  long_term_support: bool | IResolvable = None,
  ml: bool | IResolvable = None,
  photon: bool | IResolvable = None,
  provider_config: DataDatabricksSparkVersionProviderConfig = None,
  scala: str = None,
  spark_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta">beta</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics">genomics</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu">gpu</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton">graviton</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest">latest</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport">long_term_support</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml">ml</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon">photon</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala">scala</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion">spark_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `beta`<sup>Optional</sup> <a name="beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta"></a>

```python
beta: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}.

---

##### `genomics`<sup>Optional</sup> <a name="genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics"></a>

```python
genomics: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu"></a>

```python
gpu: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton"></a>

```python
graviton: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest"></a>

```python
latest: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}.

---

##### `long_term_support`<sup>Optional</sup> <a name="long_term_support" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport"></a>

```python
long_term_support: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}.

---

##### `ml`<sup>Optional</sup> <a name="ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml"></a>

```python
ml: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}.

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon"></a>

```python
photon: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksSparkVersionProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#provider_config DataDatabricksSparkVersion#provider_config}

---

##### `scala`<sup>Optional</sup> <a name="scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala"></a>

```python
scala: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}.

---

##### `spark_version`<sup>Optional</sup> <a name="spark_version" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion"></a>

```python
spark_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}.

---

### DataDatabricksSparkVersionProviderConfig <a name="DataDatabricksSparkVersionProviderConfig" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#workspace_id DataDatabricksSparkVersion#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/spark_version#workspace_id DataDatabricksSparkVersion#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSparkVersionProviderConfigOutputReference <a name="DataDatabricksSparkVersionProviderConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_spark_version

dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSparkVersionProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionProviderConfig">DataDatabricksSparkVersionProviderConfig</a>

---



