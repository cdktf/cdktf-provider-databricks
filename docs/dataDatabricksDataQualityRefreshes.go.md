# `dataDatabricksDataQualityRefreshes` Submodule <a name="`dataDatabricksDataQualityRefreshes` Submodule" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefreshes <a name="DataDatabricksDataQualityRefreshes" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes databricks_data_quality_refreshes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.NewDataDatabricksDataQualityRefreshes(scope Construct, id *string, config DataDatabricksDataQualityRefreshesConfig) DataDatabricksDataQualityRefreshes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig">DataDatabricksDataQualityRefreshesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig">DataDatabricksDataQualityRefreshesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDataQualityRefreshes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.DataDatabricksDataQualityRefreshes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.DataDatabricksDataQualityRefreshes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.DataDatabricksDataQualityRefreshes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.DataDatabricksDataQualityRefreshes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDataQualityRefreshes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDataQualityRefreshes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDataQualityRefreshes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefreshes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.refreshes">Refreshes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList">DataDatabricksDataQualityRefreshesRefreshesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Refreshes`<sup>Required</sup> <a name="Refreshes" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.refreshes"></a>

```go
func Refreshes() DataDatabricksDataQualityRefreshesRefreshesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList">DataDatabricksDataQualityRefreshesRefreshesList</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshesConfig <a name="DataDatabricksDataQualityRefreshesConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

&datadatabricksdataqualityrefreshes.DataDatabricksDataQualityRefreshesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ObjectId: *string,
	ObjectType: *string,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}.

---

### DataDatabricksDataQualityRefreshesRefreshes <a name="DataDatabricksDataQualityRefreshesRefreshes" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

&datadatabricksdataqualityrefreshes.DataDatabricksDataQualityRefreshesRefreshes {
	ObjectId: *string,
	ObjectType: *string,
	RefreshId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.refreshId">RefreshId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#refresh_id DataDatabricksDataQualityRefreshes#refresh_id}. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `RefreshId`<sup>Required</sup> <a name="RefreshId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.refreshId"></a>

```go
RefreshId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refreshes#refresh_id DataDatabricksDataQualityRefreshes#refresh_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityRefreshesRefreshesList <a name="DataDatabricksDataQualityRefreshesRefreshesList" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.NewDataDatabricksDataQualityRefreshesRefreshesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDataQualityRefreshesRefreshesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get"></a>

```go
func Get(index *f64) DataDatabricksDataQualityRefreshesRefreshesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataQualityRefreshesRefreshesOutputReference <a name="DataDatabricksDataQualityRefreshesRefreshesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdataqualityrefreshes"

datadatabricksdataqualityrefreshes.NewDataDatabricksDataQualityRefreshesRefreshesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDataQualityRefreshesRefreshesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.endTimeMs">EndTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.startTimeMs">StartTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshIdInput">RefreshIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshId">RefreshId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeMs`<sup>Required</sup> <a name="EndTimeMs" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.endTimeMs"></a>

```go
func EndTimeMs() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `StartTimeMs`<sup>Required</sup> <a name="StartTimeMs" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.startTimeMs"></a>

```go
func StartTimeMs() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `RefreshIdInput`<sup>Optional</sup> <a name="RefreshIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshIdInput"></a>

```go
func RefreshIdInput() *f64
```

- *Type:* *f64

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `RefreshId`<sup>Required</sup> <a name="RefreshId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshId"></a>

```go
func RefreshId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataQualityRefreshesRefreshes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>

---



