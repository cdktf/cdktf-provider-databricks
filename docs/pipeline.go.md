# `databricks_pipeline`

Refer to the Terraform Registory for docs: [`databricks_pipeline`](https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline).

# `pipeline` Submodule <a name="`pipeline` Submodule" id="@cdktf/provider-databricks.pipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipeline <a name="Pipeline" id="@cdktf/provider-databricks.pipeline.Pipeline"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline databricks_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipeline(scope Construct, id *string, config PipelineConfig) Pipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig">PipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineConfig">PipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putLibrary">PutLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames">ResetAllowDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment">ResetDevelopment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary">ResetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton">ResetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetServerless">ResetServerless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.Pipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster"></a>

```go
func PutCluster(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters"></a>

```go
func PutFilters(value PipelineFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `PutLibrary` <a name="PutLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary"></a>

```go
func PutLibrary(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts"></a>

```go
func PutTimeouts(value PipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

---

##### `ResetAllowDuplicateNames` <a name="ResetAllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames"></a>

```go
func ResetAllowDuplicateNames()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-databricks.pipeline.Pipeline.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetDevelopment` <a name="ResetDevelopment" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment"></a>

```go
func ResetDevelopment()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetLibrary` <a name="ResetLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary"></a>

```go
func ResetLibrary()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.pipeline.Pipeline.resetName"></a>

```go
func ResetName()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetPhoton` <a name="ResetPhoton" id="@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton"></a>

```go
func ResetPhoton()
```

##### `ResetServerless` <a name="ResetServerless" id="@cdktf/provider-databricks.pipeline.Pipeline.resetServerless"></a>

```go
func ResetServerless()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-databricks.pipeline.Pipeline.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.Pipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.Pipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.Pipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.library">Library</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput">AllowDuplicateNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput">ClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput">ConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput">DevelopmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput">LibraryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput">PhotonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput">ServerlessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput">StorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames">AllowDuplicateNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuous">Continuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.development">Development</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photon">Photon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverless">Serverless</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storage">Storage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.pipeline.Pipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.pipeline.Pipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.pipeline.Pipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.pipeline.Pipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cluster"></a>

```go
func Cluster() PipelineClusterList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filters"></a>

```go
func Filters() PipelineFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a>

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-databricks.pipeline.Pipeline.property.library"></a>

```go
func Library() PipelineLibraryList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notification"></a>

```go
func Notification() PipelineNotificationList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts"></a>

```go
func Timeouts() PipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.pipeline.Pipeline.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `AllowDuplicateNamesInput`<sup>Optional</sup> <a name="AllowDuplicateNamesInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput"></a>

```go
func AllowDuplicateNamesInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput"></a>

```go
func ClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput"></a>

```go
func ConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `DevelopmentInput`<sup>Optional</sup> <a name="DevelopmentInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput"></a>

```go
func DevelopmentInput() interface{}
```

- *Type:* interface{}

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput"></a>

```go
func FiltersInput() PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput"></a>

```go
func LibraryInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `PhotonInput`<sup>Optional</sup> <a name="PhotonInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput"></a>

```go
func PhotonInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessInput`<sup>Optional</sup> <a name="ServerlessInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput"></a>

```go
func ServerlessInput() interface{}
```

- *Type:* interface{}

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput"></a>

```go
func StorageInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowDuplicateNames`<sup>Required</sup> <a name="AllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames"></a>

```go
func AllowDuplicateNames() interface{}
```

- *Type:* interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configuration"></a>

```go
func Configuration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuous"></a>

```go
func Continuous() interface{}
```

- *Type:* interface{}

---

##### `Development`<sup>Required</sup> <a name="Development" id="@cdktf/provider-databricks.pipeline.Pipeline.property.development"></a>

```go
func Development() interface{}
```

- *Type:* interface{}

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.pipeline.Pipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Photon`<sup>Required</sup> <a name="Photon" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photon"></a>

```go
func Photon() interface{}
```

- *Type:* interface{}

---

##### `Serverless`<sup>Required</sup> <a name="Serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverless"></a>

```go
func Serverless() interface{}
```

- *Type:* interface{}

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storage"></a>

```go
func Storage() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-databricks.pipeline.Pipeline.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineCluster <a name="PipelineCluster" id="@cdktf/provider-databricks.pipeline.PipelineCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineCluster {
	ApplyPolicyDefaultValues: interface{},
	Autoscale: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterAutoscale,
	AwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterAwsAttributes,
	AzureAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterAzureAttributes,
	ClusterLogConf: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterClusterLogConf,
	CustomTags: *map[string]*string,
	DriverInstancePoolId: *string,
	DriverNodeTypeId: *string,
	EnableLocalDiskEncryption: interface{},
	GcpAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterGcpAttributes,
	InitScripts: interface{},
	InstancePoolId: *string,
	Label: *string,
	NodeTypeId: *string,
	NumWorkers: *f64,
	PolicyId: *string,
	SparkConf: *map[string]*string,
	SparkEnvVars: *map[string]*string,
	SshPublicKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts">InitScripts</a></code> | <code>interface{}</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#label Pipeline#label}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#num_workers Pipeline#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#policy_id Pipeline#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}. |

---

##### `ApplyPolicyDefaultValues`<sup>Optional</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues"></a>

```go
ApplyPolicyDefaultValues interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale"></a>

```go
Autoscale PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#autoscale Pipeline#autoscale}

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes"></a>

```go
AwsAttributes PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#aws_attributes Pipeline#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes"></a>

```go
AzureAttributes PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#azure_attributes Pipeline#azure_attributes}

---

##### `ClusterLogConf`<sup>Optional</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf"></a>

```go
ClusterLogConf PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#cluster_log_conf Pipeline#cluster_log_conf}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}.

---

##### `DriverInstancePoolId`<sup>Optional</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId"></a>

```go
DriverInstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}.

---

##### `DriverNodeTypeId`<sup>Optional</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId"></a>

```go
DriverNodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}.

---

##### `EnableLocalDiskEncryption`<sup>Optional</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption"></a>

```go
EnableLocalDiskEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes"></a>

```go
GcpAttributes PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#gcp_attributes Pipeline#gcp_attributes}

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts"></a>

```go
InitScripts interface{}
```

- *Type:* interface{}

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#init_scripts Pipeline#init_scripts}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#label Pipeline#label}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}.

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#num_workers Pipeline#num_workers}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#policy_id Pipeline#policy_id}.

---

##### `SparkConf`<sup>Optional</sup> <a name="SparkConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf"></a>

```go
SparkConf *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}.

---

##### `SparkEnvVars`<sup>Optional</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars"></a>

```go
SparkEnvVars *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}.

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}.

---

### PipelineClusterAutoscale <a name="PipelineClusterAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterAutoscale {
	MaxWorkers: *f64,
	MinWorkers: *f64,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#max_workers Pipeline#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#min_workers Pipeline#min_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#mode Pipeline#mode}. |

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#max_workers Pipeline#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers"></a>

```go
MinWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#min_workers Pipeline#min_workers}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#mode Pipeline#mode}.

---

### PipelineClusterAwsAttributes <a name="PipelineClusterAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterAwsAttributes {
	Availability: *string,
	EbsVolumeCount: *f64,
	EbsVolumeSize: *f64,
	EbsVolumeType: *string,
	FirstOnDemand: *f64,
	InstanceProfileArn: *string,
	SpotBidPricePercent: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `EbsVolumeCount`<sup>Optional</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount"></a>

```go
EbsVolumeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}.

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize"></a>

```go
EbsVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType"></a>

```go
EbsVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent"></a>

```go
SpotBidPricePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterAzureAttributes <a name="PipelineClusterAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterAzureAttributes {
	Availability: *string,
	FirstOnDemand: *f64,
	SpotBidMaxPrice: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice"></a>

```go
SpotBidMaxPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}.

---

### PipelineClusterClusterLogConf <a name="PipelineClusterClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterClusterLogConf {
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterClusterLogConfDbfs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterClusterLogConfS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs"></a>

```go
Dbfs PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3"></a>

```go
S3 PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#s3 Pipeline#s3}

---

### PipelineClusterClusterLogConfDbfs <a name="PipelineClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterClusterLogConfDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterClusterLogConfS3 <a name="PipelineClusterClusterLogConfS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterClusterLogConfS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterGcpAttributes <a name="PipelineClusterGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterGcpAttributes {
	Availability: *string,
	GoogleServiceAccount: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount"></a>

```go
GoogleServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterInitScripts <a name="PipelineClusterInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScripts {
	Abfss: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterInitScriptsAbfss,
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterInitScriptsDbfs,
	File: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterInitScriptsFile,
	Gcs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterInitScriptsGcs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterInitScriptsS3,
	Workspace: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineClusterInitScriptsWorkspace,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `Abfss`<sup>Optional</sup> <a name="Abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss"></a>

```go
Abfss PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#abfss Pipeline#abfss}

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs"></a>

```go
Dbfs PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file"></a>

```go
File PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#file Pipeline#file}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs"></a>

```go
Gcs PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#gcs Pipeline#gcs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3"></a>

```go
S3 PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace"></a>

```go
Workspace PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#workspace Pipeline#workspace}

---

### PipelineClusterInitScriptsAbfss <a name="PipelineClusterInitScriptsAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScriptsAbfss {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsDbfs <a name="PipelineClusterInitScriptsDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScriptsDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsFile <a name="PipelineClusterInitScriptsFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScriptsFile {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsGcs <a name="PipelineClusterInitScriptsGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScriptsGcs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsS3 <a name="PipelineClusterInitScriptsS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScriptsS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterInitScriptsWorkspace <a name="PipelineClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineClusterInitScriptsWorkspace {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineConfig <a name="PipelineConfig" id="@cdktf/provider-databricks.pipeline.PipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowDuplicateNames: interface{},
	Catalog: *string,
	Channel: *string,
	Cluster: interface{},
	Configuration: *map[string]*string,
	Continuous: interface{},
	Development: interface{},
	Edition: *string,
	Filters: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineFilters,
	Id: *string,
	Library: interface{},
	Name: *string,
	Notification: interface{},
	Photon: interface{},
	Serverless: interface{},
	Storage: *string,
	Target: *string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames">AllowDuplicateNames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel">Channel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster">Cluster</a></code> | <code>interface{}</code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous">Continuous</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.development">Development</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.library">Library</a></code> | <code>interface{}</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon">Photon</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless">Serverless</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage">Storage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowDuplicateNames`<sup>Optional</sup> <a name="AllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames"></a>

```go
AllowDuplicateNames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster"></a>

```go
Cluster interface{}
```

- *Type:* interface{}

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration"></a>

```go
Configuration *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous"></a>

```go
Continuous interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `Development`<sup>Optional</sup> <a name="Development" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.development"></a>

```go
Development interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters"></a>

```go
Filters PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Library`<sup>Optional</sup> <a name="Library" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.library"></a>

```go
Library interface{}
```

- *Type:* interface{}

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#library Pipeline#library}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `Photon`<sup>Optional</sup> <a name="Photon" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon"></a>

```go
Photon interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `Serverless`<sup>Optional</sup> <a name="Serverless" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless"></a>

```go
Serverless interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage"></a>

```go
Storage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts"></a>

```go
Timeouts PipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

### PipelineFilters <a name="PipelineFilters" id="@cdktf/provider-databricks.pipeline.PipelineFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineFilters {
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude">Exclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#exclude Pipeline#exclude}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.include">Include</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#include Pipeline#include}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#exclude Pipeline#exclude}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#include Pipeline#include}.

---

### PipelineLibrary <a name="PipelineLibrary" id="@cdktf/provider-databricks.pipeline.PipelineLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineLibrary {
	File: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineLibraryFile,
	Jar: *string,
	Maven: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineLibraryMaven,
	Notebook: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.pipeline.PipelineLibraryNotebook,
	Whl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar">Jar</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#jar Pipeline#jar}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl">Whl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#whl Pipeline#whl}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file"></a>

```go
File PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#file Pipeline#file}

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar"></a>

```go
Jar *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#jar Pipeline#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven"></a>

```go
Maven PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#maven Pipeline#maven}

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook"></a>

```go
Notebook PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#notebook Pipeline#notebook}

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl"></a>

```go
Whl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#whl Pipeline#whl}.

---

### PipelineLibraryFile <a name="PipelineLibraryFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineLibraryFile {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineLibraryMaven <a name="PipelineLibraryMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineLibraryMaven {
	Coordinates: *string,
	Exclusions: *[]*string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates">Coordinates</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#coordinates Pipeline#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#exclusions Pipeline#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#repo Pipeline#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates"></a>

```go
Coordinates *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#coordinates Pipeline#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#exclusions Pipeline#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#repo Pipeline#repo}.

---

### PipelineLibraryNotebook <a name="PipelineLibraryNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineLibraryNotebook {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineNotification <a name="PipelineNotification" id="@cdktf/provider-databricks.pipeline.PipelineNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineNotification {
	Alerts: *[]*string,
	EmailRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts">Alerts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#alerts Pipeline#alerts}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients">EmailRecipients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}. |

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts"></a>

```go
Alerts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#alerts Pipeline#alerts}.

---

##### `EmailRecipients`<sup>Required</sup> <a name="EmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients"></a>

```go
EmailRecipients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}.

---

### PipelineTimeouts <a name="PipelineTimeouts" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

&pipeline.PipelineTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#default Pipeline#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/pipeline#default Pipeline#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineClusterAutoscaleOutputReference <a name="PipelineClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers"></a>

```go
func ResetMinWorkers()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput">MinWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```go
func MinWorkersInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers"></a>

```go
func MinWorkers() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---


### PipelineClusterAwsAttributesOutputReference <a name="PipelineClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount">ResetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetEbsVolumeCount` <a name="ResetEbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```go
func ResetEbsVolumeCount()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```go
func ResetEbsVolumeSize()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```go
func ResetEbsVolumeType()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```go
func ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">EbsVolumeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `EbsVolumeCountInput`<sup>Optional</sup> <a name="EbsVolumeCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```go
func EbsVolumeCountInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```go
func EbsVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```go
func EbsVolumeTypeInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```go
func SpotBidPricePercentInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `EbsVolumeCount`<sup>Required</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```go
func EbsVolumeCount() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```go
func EbsVolumeSize() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```go
func SpotBidPricePercent() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---


### PipelineClusterAzureAttributesOutputReference <a name="PipelineClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterAzureAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAzureAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```go
func ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```go
func SpotBidMaxPriceInput() *f64
```

- *Type:* *f64

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```go
func SpotBidMaxPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---


### PipelineClusterClusterLogConfDbfsOutputReference <a name="PipelineClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterClusterLogConfDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---


### PipelineClusterClusterLogConfOutputReference <a name="PipelineClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterClusterLogConfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs"></a>

```go
func PutDbfs(value PipelineClusterClusterLogConfDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3"></a>

```go
func PutS3(value PipelineClusterClusterLogConfS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs"></a>

```go
func Dbfs() PipelineClusterClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3"></a>

```go
func S3() PipelineClusterClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input"></a>

```go
func S3Input() PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---


### PipelineClusterClusterLogConfS3OutputReference <a name="PipelineClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterClusterLogConfS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---


### PipelineClusterGcpAttributesOutputReference <a name="PipelineClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterGcpAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterGcpAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```go
func ResetGoogleServiceAccount()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```go
func GoogleServiceAccountInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```go
func GoogleServiceAccount() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---


### PipelineClusterInitScriptsAbfssOutputReference <a name="PipelineClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsAbfssOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsAbfssOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---


### PipelineClusterInitScriptsDbfsOutputReference <a name="PipelineClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---


### PipelineClusterInitScriptsFileOutputReference <a name="PipelineClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---


### PipelineClusterInitScriptsGcsOutputReference <a name="PipelineClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---


### PipelineClusterInitScriptsList <a name="PipelineClusterInitScriptsList" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineClusterInitScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get"></a>

```go
func Get(index *f64) PipelineClusterInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineClusterInitScriptsOutputReference <a name="PipelineClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineClusterInitScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss">PutAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace">PutWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss">ResetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbfss` <a name="PutAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss"></a>

```go
func PutAbfss(value PipelineClusterInitScriptsAbfss)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs"></a>

```go
func PutDbfs(value PipelineClusterInitScriptsDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile"></a>

```go
func PutFile(value PipelineClusterInitScriptsFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs"></a>

```go
func PutGcs(value PipelineClusterInitScriptsGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3"></a>

```go
func PutS3(value PipelineClusterInitScriptsS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `PutWorkspace` <a name="PutWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace"></a>

```go
func PutWorkspace(value PipelineClusterInitScriptsWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `ResetAbfss` <a name="ResetAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss"></a>

```go
func ResetAbfss()
```

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput">AbfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abfss`<sup>Required</sup> <a name="Abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss"></a>

```go
func Abfss() PipelineClusterInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a>

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs"></a>

```go
func Dbfs() PipelineClusterInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file"></a>

```go
func File() PipelineClusterInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs"></a>

```go
func Gcs() PipelineClusterInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3"></a>

```go
func S3() PipelineClusterInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace"></a>

```go
func Workspace() PipelineClusterInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a>

---

##### `AbfssInput`<sup>Optional</sup> <a name="AbfssInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput"></a>

```go
func AbfssInput() PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput"></a>

```go
func FileInput() PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput"></a>

```go
func GcsInput() PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input"></a>

```go
func S3Input() PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineClusterInitScriptsS3OutputReference <a name="PipelineClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---


### PipelineClusterInitScriptsWorkspaceOutputReference <a name="PipelineClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterInitScriptsWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---


### PipelineClusterList <a name="PipelineClusterList" id="@cdktf/provider-databricks.pipeline.PipelineClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get"></a>

```go
func Get(index *f64) PipelineClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineClusterOutputReference <a name="PipelineClusterOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf">PutClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts">PutInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues">ResetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf">ResetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId">ResetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId">ResetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption">ResetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf">ResetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars">ResetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale"></a>

```go
func PutAutoscale(value PipelineClusterAutoscale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes"></a>

```go
func PutAwsAttributes(value PipelineClusterAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes"></a>

```go
func PutAzureAttributes(value PipelineClusterAzureAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `PutClusterLogConf` <a name="PutClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf"></a>

```go
func PutClusterLogConf(value PipelineClusterClusterLogConf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes"></a>

```go
func PutGcpAttributes(value PipelineClusterGcpAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `PutInitScripts` <a name="PutInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts"></a>

```go
func PutInitScripts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyPolicyDefaultValues` <a name="ResetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues"></a>

```go
func ResetApplyPolicyDefaultValues()
```

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes"></a>

```go
func ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes"></a>

```go
func ResetAzureAttributes()
```

##### `ResetClusterLogConf` <a name="ResetClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf"></a>

```go
func ResetClusterLogConf()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDriverInstancePoolId` <a name="ResetDriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId"></a>

```go
func ResetDriverInstancePoolId()
```

##### `ResetDriverNodeTypeId` <a name="ResetDriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId"></a>

```go
func ResetDriverNodeTypeId()
```

##### `ResetEnableLocalDiskEncryption` <a name="ResetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption"></a>

```go
func ResetEnableLocalDiskEncryption()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes"></a>

```go
func ResetGcpAttributes()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts"></a>

```go
func ResetInitScripts()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId"></a>

```go
func ResetInstancePoolId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId"></a>

```go
func ResetNodeTypeId()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetSparkConf` <a name="ResetSparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf"></a>

```go
func ResetSparkConf()
```

##### `ResetSparkEnvVars` <a name="ResetSparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars"></a>

```go
func ResetSparkEnvVars()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts">InitScripts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput">ApplyPolicyDefaultValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput">ClusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput">DriverInstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput">DriverNodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput">EnableLocalDiskEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput">InitScriptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput">SparkConfInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput">SparkEnvVarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale"></a>

```go
func Autoscale() PipelineClusterAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a>

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes"></a>

```go
func AwsAttributes() PipelineClusterAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes"></a>

```go
func AzureAttributes() PipelineClusterAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a>

---

##### `ClusterLogConf`<sup>Required</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf"></a>

```go
func ClusterLogConf() PipelineClusterClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes"></a>

```go
func GcpAttributes() PipelineClusterGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a>

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts"></a>

```go
func InitScripts() PipelineClusterInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a>

---

##### `ApplyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="ApplyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput"></a>

```go
func ApplyPolicyDefaultValuesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput"></a>

```go
func AutoscaleInput() PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput"></a>

```go
func AwsAttributesInput() PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput"></a>

```go
func AzureAttributesInput() PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `ClusterLogConfInput`<sup>Optional</sup> <a name="ClusterLogConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput"></a>

```go
func ClusterLogConfInput() PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverInstancePoolIdInput`<sup>Optional</sup> <a name="DriverInstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput"></a>

```go
func DriverInstancePoolIdInput() *string
```

- *Type:* *string

---

##### `DriverNodeTypeIdInput`<sup>Optional</sup> <a name="DriverNodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput"></a>

```go
func DriverNodeTypeIdInput() *string
```

- *Type:* *string

---

##### `EnableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="EnableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput"></a>

```go
func EnableLocalDiskEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput"></a>

```go
func GcpAttributesInput() PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput"></a>

```go
func InitScriptsInput() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `SparkConfInput`<sup>Optional</sup> <a name="SparkConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput"></a>

```go
func SparkConfInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkEnvVarsInput`<sup>Optional</sup> <a name="SparkEnvVarsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput"></a>

```go
func SparkEnvVarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApplyPolicyDefaultValues`<sup>Required</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues"></a>

```go
func ApplyPolicyDefaultValues() interface{}
```

- *Type:* interface{}

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverInstancePoolId`<sup>Required</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId"></a>

```go
func DriverInstancePoolId() *string
```

- *Type:* *string

---

##### `DriverNodeTypeId`<sup>Required</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId"></a>

```go
func DriverNodeTypeId() *string
```

- *Type:* *string

---

##### `EnableLocalDiskEncryption`<sup>Required</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption"></a>

```go
func EnableLocalDiskEncryption() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `SparkConf`<sup>Required</sup> <a name="SparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf"></a>

```go
func SparkConf() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkEnvVars`<sup>Required</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars"></a>

```go
func SparkEnvVars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineFiltersOutputReference <a name="PipelineFiltersOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---


### PipelineLibraryFileOutputReference <a name="PipelineLibraryFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineLibraryFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineLibraryFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---


### PipelineLibraryList <a name="PipelineLibraryList" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineLibraryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineLibraryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get"></a>

```go
func Get(index *f64) PipelineLibraryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineLibraryMavenOutputReference <a name="PipelineLibraryMavenOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineLibraryMavenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineLibraryMavenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates"></a>

```go
func Coordinates() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---


### PipelineLibraryNotebookOutputReference <a name="PipelineLibraryNotebookOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineLibraryNotebookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineLibraryNotebookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---


### PipelineLibraryOutputReference <a name="PipelineLibraryOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineLibraryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineLibraryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile"></a>

```go
func PutFile(value PipelineLibraryFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven"></a>

```go
func PutMaven(value PipelineLibraryMaven)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook"></a>

```go
func PutNotebook(value PipelineLibraryNotebook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar"></a>

```go
func ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven"></a>

```go
func ResetMaven()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook"></a>

```go
func ResetNotebook()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl"></a>

```go
func ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput">JarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput">NotebookInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput">WhlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar">Jar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl">Whl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file"></a>

```go
func File() PipelineLibraryFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven"></a>

```go
func Maven() PipelineLibraryMavenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook"></a>

```go
func Notebook() PipelineLibraryNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput"></a>

```go
func FileInput() PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput"></a>

```go
func JarInput() *string
```

- *Type:* *string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput"></a>

```go
func MavenInput() PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput"></a>

```go
func NotebookInput() PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput"></a>

```go
func WhlInput() *string
```

- *Type:* *string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar"></a>

```go
func Jar() *string
```

- *Type:* *string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl"></a>

```go
func Whl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineNotificationList <a name="PipelineNotificationList" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get"></a>

```go
func Get(index *f64) PipelineNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineNotificationOutputReference <a name="PipelineNotificationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput">AlertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput">EmailRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts">Alerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients">EmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertsInput`<sup>Optional</sup> <a name="AlertsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput"></a>

```go
func AlertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailRecipientsInput`<sup>Optional</sup> <a name="EmailRecipientsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput"></a>

```go
func EmailRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts"></a>

```go
func Alerts() *[]*string
```

- *Type:* *[]*string

---

##### `EmailRecipients`<sup>Required</sup> <a name="EmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients"></a>

```go
func EmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineTimeoutsOutputReference <a name="PipelineTimeoutsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/pipeline"

pipeline.NewPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



